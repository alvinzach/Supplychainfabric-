set -ev
export COMPOSE_PROJECT_NAME=supplychain
docker-compose -f docker-compose.yml down
docker-compose -f docker-compose.yml up -d
sleep 7
# creating channel
docker exec cli peer channel create -o orderer.supplychain.com:7050 -c supplychainchannel -f /etc/hyperledger/configtx/channel.tx
# joining peers to channels
docker exec cli peer channel join -b supplychainchannel.block
docker exec -e "CORE_PEER_ADDRESS=peer0.collection.supplychain.com:7051" -e "CORE_PEER_LOCALMSPID=collectionMSP" -e "CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/collection.supplychain.com/users/Admin@collection.supplychain.com/msp" cli peer channel join -b supplychainchannel.block
docker exec -e "CORE_PEER_ADDRESS=peer0.customer.supplychain.com:7051" -e "CORE_PEER_LOCALMSPID=customerMSP" -e "CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/customer.supplychain.com/users/Admin@customer.supplychain.com/msp" cli peer channel join -b supplychainchannel.block
# installing and instatiating chaincode
docker exec cli peer chaincode install -n sc -v 0 -p "github.com/supplychain"
docker exec cli peer chaincode instantiate -o orderer.supplychain.com:7050 -C supplychainchannel -n sc -v 0 -c '{"Args":[""]}' -P "OR ('warehouseMSP.member','collectionMSP.member')"
docker exec  -e "CORE_PEER_ADDRESS=peer0.collection.supplychain.com:7051" -e "CORE_PEER_LOCALMSPID=collectionMSP" -e "CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/collection.supplychain.com/users/Admin@collection.supplychain.com/msp" cli peer chaincode install -n sc -v 0 -p "github.com/supplychain"
docker exec  -e "CORE_PEER_ADDRESS=peer0.collection.supplychain.com:7051" -e "CORE_PEER_LOCALMSPID=collectionMSP" -e "CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/collection.supplychain.com/users/Admin@collection.supplychain.com/msp" cli peer chaincode instantiate -o orderer.supplychain.com:7050 -C supplychainchannel -n sc -v 0 -c '{"Args":[""]}' -P "OR ('warehouseMSP.member','collectionMSP.member')"
#sleep 10
#docker exec cli peer chaincode invoke -C supplychainchannel -n sc -c '{"function":"recordPackage","Args":["1","status","here"]}'
#sleep 5

#docker exec -e "CORE_PEER_ADDRESS=peer0.collection.supplychain.com:7051"  -e "CORE_PEER_LOCALMSPID=collectionMSP" -e "CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/collection.supplychain.com/users/Admin@collection.supplychain.com/msp" cli peer chaincode invoke -C supplychainchannel -n sc -c '{"function":"recordPackage","Args":["2","status","here"]}'
#sleep 5
#docker exec -e "CORE_PEER_LOCALMSPID=warehouseMSP" -e "CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/warehouse.supplychain.com/users/Admin@warehouse.supplychain.com/msp" cli peer chaincode query -C supplychainchannel -n sc -c '{"function":"queryPackage","Args":["2"]}'
