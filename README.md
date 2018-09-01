# Supplychain POC on hyperledger fabric
 A simple supplychain POC on hyperledger fabric . The system has three type of nodes 
 - Warehouse , which adds a package
 - Collection centers which edit the status of package
 - Customers who can see the current and previous states of a package
## To run the application :
 Download prerequisites from here : [hyperledger fabric prerequisites](https://hyperledger-fabric.readthedocs.io/en/release-1.2/prereqs.html) 

Run :

    ```sh
       $ npm install -d
    ```
Start the blockchain network :

    ```sh
       # ./start.sh
    ```
Run : 
    ```sh
       $ node server
    ```
    And navigate to localhost:3000
