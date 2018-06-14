var express=require('express')
var router=express.Router()
var Fabric_Client=require('fabric-client')
var path=require('path')
var util=require('util')
var os=require('os')
var fabric_client=new Fabric_Client();
var channel=fabric_client.newChannel('supplychainchannel')
var order= fabric_client.newOrderer('grpc://localhost:7050')
channel.addOrderer(order)
var peer=fabric_client.newPeer('grpc://localhost:7051')
channel.addPeer(peer)
router.post('/getStatus',(req,res)=>{
    var member_user = null;
    var store_path = './customerCerts';
    var tx_id = null;
    Fabric_Client.newDefaultKeyValueStore({ path: store_path
    }).then((state_store) => {
        fabric_client.setStateStore(state_store);
        var crypto_suite = Fabric_Client.newCryptoSuite();
        var crypto_store = Fabric_Client.newCryptoKeyStore({path: store_path});
        crypto_suite.setCryptoKeyStore(crypto_store);
        fabric_client.setCryptoSuite(crypto_suite);
        return fabric_client.getUserContext('customer', true);
    }).then((user_from_store) => {
        if (user_from_store && user_from_store.isEnrolled()) {
            console.log('Successfully loaded customer from persistence');
            member_user = user_from_store;
        } else {
            throw new Error('Failed to get customer');
        }
        const request = {
            chaincodeId: 'sc',
            fcn: 'queryPackage',
            args: [req.body.id.toString()]
        };
        return channel.queryByChaincode(request);
    }).then((query_responses) => {
        console.log("Query has completed, checking results");
        if (query_responses && query_responses.length == 1) {
            if (query_responses[0] instanceof Error) {
                res.json({success:false,message:'Some error occoured while queriying ledger'})
            } else {
                res.json({success:true,message:JSON.parse(query_responses[0].toString())})
            }
        } else {
            res.json({success:false,message:"No payloads were returned from query"})
        }
    }).catch((err) => {
        console.error('Failed to query successfully :: ' + err);
        res.json({success:false,message:'Some error occoured while queriying ledger'})

    });
})
router.post('/warehouse/add',(req,res)=>{
    var tx_id=null
    var member_user=null;
    var store_path="./collectionCerts"
    console.log(__dirname)
    Fabric_Client.newDefaultKeyValueStore({path:store_path}).then((state_store)=>{
        fabric_client.setStateStore(state_store)
        var crypto_suite=Fabric_Client.newCryptoSuite();
        var crypto_store=Fabric_Client.newCryptoKeyStore({path:store_path})
        crypto_suite.setCryptoKeyStore(crypto_store)
        fabric_client.setCryptoSuite(crypto_suite)
        return fabric_client.getUserContext('collection',true)
    }).then((user_from_store)=>{

        if(user_from_store&&user_from_store.isEnrolled()){
            console.log('user loaded')
            member_user=user_from_store
        }else{
            throw new Error("cannot load user"+user_from_store)
        }
        tx_id=fabric_client.newTransactionID();
        console.log("Transaction ID : "+tx_id)
        var request={
            chaincodeId:'sc',
            fcn:'recordPackage',
            args:[req.body.id.toString(),req.body.status.toString(),'collection'],
            chainId:'supplychainchannel',
            txId:tx_id
        }
        return channel.sendTransactionProposal(request);
    }).then((results)=>{
        var proposalResponses=results[0];
        var proposal=results[1];
        let isProposalGood=false
        if(proposalResponses&&proposalResponses[0].response&&
        proposalResponses[0].response.status===200){
            isProposalGood=true;
            console.log('proposal request is good')
            console.log('\n\n',proposalResponses,'\n\n')
        }else{
            console.log('proposal request is bad')
            console.log('\n\n',proposalResponses,'\n\n')
        }
        if(isProposalGood){
            console.log('preparing to send transaction')
            var request={
                proposalResponses:proposalResponses,
                proposal:proposal
            }
            var transaction_id_string =tx_id.getTransactionID()
            var promises=[]

            var sendPromise=channel.sendTransaction(request)
            promises.push(sendPromise)
            let event_hub =fabric_client.newEventHub();
            event_hub.setPeerAddr('grpc://localhost:7153')
            let txPromise=new Promise((resolve,reject)=>{
                let handle=setTimeout(()=>{
                    event_hub.disconnect()
                    resolve({event_status:'TIMEOUT'})
                },3000)
            event_hub.connect()
            event_hub.registerTxEvent(transaction_id_string,(tx,code)=>{
                clearTimeout(handle);
                event_hub.unregisterTxEvent(transaction_id_string)
                event_hub.disconnect();
                var return_status={event_status : code ,tx_id:transaction_id_string}
                if(code !== 'VALID'){
                    console.error('transaction invalid code :' +code)
                    resolve(return_status)
                }else{
                    console.log("transaction committed on peers"+event_hub._ep._endpoint.addr)
                    resolve(return_status)
                }
            },(err)=>{
                reject(new Error('theres a problem with event'))
            })
            })
            promises.push(txPromise)
            return Promise.all(promises)
        }else{
            console.log('proposal not send or valid respose not received')
            throw new Error('Failed to send Proposal or receive valid response. Response null or status is not 200. exiting...');
        }
    }).then((results)=>{
        console.log('Send transaction promise and event listener promise have completed');
        if (results && results[0] && results[0].status === 'SUCCESS') {
            console.log('Successfully sent transaction to the orderer.');
        } else {
            console.error('Failed to order the transaction. Error code: ' + response.status);
        }

        if(results && results[1] && results[1].event_status === 'VALID') {
            res.json({success:true,message:'ledger updated'})
        } else {
            res.json({success:false,message:'ledger status'+results[1].event_status})
        }
    }).catch((err)=>{
        console.log(err)
        res.json({success:false,message:err})
    })

})
module.exports=router
