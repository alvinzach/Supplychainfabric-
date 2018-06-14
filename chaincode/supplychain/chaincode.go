
package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"strconv"
    "time"
	"github.com/hyperledger/fabric/core/chaincode/shim"
	peer "github.com/hyperledger/fabric/protos/peer"
)

type SmartContract struct {
}

type Package struct {
	ObjectType string `json:"docType"`
	Id    string `json:"id"`
	Status string `json:"status"`
	Location string `json:"loaction"`
	Timestamp string `json:"time"`
}

func (s *SmartContract) Init(stub shim.ChaincodeStubInterface) peer.Response {
	return shim.Success(nil)
}

func (s *SmartContract) Invoke(stub shim.ChaincodeStubInterface) peer.Response {

	function, args := stub.GetFunctionAndParameters()
	if function == "queryPackage" {
		return s.queryPackage(stub, args)
	} else if function == "recordPackage" {
		return s.recordPackage(stub, args)
	} else if function == "queryAllPackage" {
		return s.queryAllPackage(stub)
	}else if function == "getHistory" {
		return s.getHistory(stub,args)
	}
	return shim.Error("Invalid Smart Contract function name.")
}

func (s *SmartContract) queryPackage(stub shim.ChaincodeStubInterface, args []string) peer.Response {

	if len(args) != 1 {
		return shim.Error("Incorrect number of arguments. Expecting 1")
	}

	packageAsBytes, _ := stub.GetState(args[0])
	if packageAsBytes == nil {
		return shim.Error("Could not locate entry")
	}
	return shim.Success(packageAsBytes)
}


func (s *SmartContract) recordPackage(stub shim.ChaincodeStubInterface, args []string) peer.Response {

	if len(args) != 3 {
		return shim.Error("Incorrect number of arguments. Expecting 3")
	}
	fmt.Println("hello")
	var Package = Package{ObjectType:"package" ,Id: args[0], Status: args[1], Location: args[2], Timestamp: strconv.FormatInt(time.Now().Unix(), 10)}
	fmt.Println(Package)
	PackageAsBytes, _ := json.Marshal(Package)
	err := stub.PutState(args[0], PackageAsBytes)
	if err != nil {
		return shim.Error(fmt.Sprintf("Failed to record data: %s", args[0]))
	}
	fmt.Println(args[0])
	return shim.Success(nil)
}

func (s *SmartContract) queryAllPackage(stub shim.ChaincodeStubInterface) peer.Response {

	queryString := fmt.Sprintf("{\"selector\":{\"docType\":\"package\"}}")
	queryResults, err := getQueryResultForQueryString(stub, queryString)
	if err != nil {
		return shim.Error(err.Error())
	}
	return shim.Success(queryResults)
}

func getQueryResultForQueryString(stub shim.ChaincodeStubInterface, queryString string) ([]byte, error) {

	fmt.Printf("- getQueryResultForQueryString queryString:\n%s\n", queryString)

	resultsIterator, err := stub.GetQueryResult(queryString)
	if err != nil {
		return nil, err
	}
	defer resultsIterator.Close()
	var buffer bytes.Buffer
	buffer.WriteString("[")

	bArrayMemberAlreadyWritten := false
	for resultsIterator.HasNext() {
		queryResponse, err := resultsIterator.Next()
		if err != nil {
			return nil, err
		}
		if bArrayMemberAlreadyWritten == true {
			buffer.WriteString(",")
		}
		buffer.WriteString("{\"Key\":")
		buffer.WriteString("\"")
		buffer.WriteString(queryResponse.Key)
		buffer.WriteString("\"")

		buffer.WriteString(", \"Record\":")
		buffer.WriteString(string(queryResponse.Value))
		buffer.WriteString("}")
		bArrayMemberAlreadyWritten = true
	}
	buffer.WriteString("]")

	fmt.Printf("- getQueryResultForQueryString queryResult:\n%s\n", buffer.String())

	return buffer.Bytes(), nil
}
func (t *SmartContract) getHistory(stub shim.ChaincodeStubInterface, args []string) peer.Response {

	ID := args[0]
	resultsIterator, err := stub.GetHistoryForKey(ID)
	if err != nil {
		return shim.Error(err.Error())
	}
	defer resultsIterator.Close()

	var buffer bytes.Buffer
	buffer.WriteString("[")

	bArrayMemberAlreadyWritten := false
	for resultsIterator.HasNext() {
		response, err := resultsIterator.Next()
		if err != nil {
			return shim.Error(err.Error())
		}
		if bArrayMemberAlreadyWritten == true {
			buffer.WriteString(",")
		}
		buffer.WriteString("{\"TxId\":")
		buffer.WriteString("\"")
		buffer.WriteString(response.TxId)
		buffer.WriteString("\"")

		buffer.WriteString(", \"Value\":")
		if response.IsDelete {
			buffer.WriteString("null")
		} else {
			buffer.WriteString(string(response.Value))
		}
		buffer.WriteString(", \"IsDelete\":")
		buffer.WriteString("\"")
		buffer.WriteString(strconv.FormatBool(response.IsDelete))
		buffer.WriteString("\"")

		buffer.WriteString("}")
		bArrayMemberAlreadyWritten = true
	}
	buffer.WriteString("]")
	return shim.Success(buffer.Bytes())
}

func main() {

	err := shim.Start(new(SmartContract))
	if err != nil {
		fmt.Printf("Error creating new Smart Contract: %s", err)
	}
}