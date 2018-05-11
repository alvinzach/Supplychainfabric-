set -ev
rm -rf ./crypto-config 
rm -rf ./config -r
mkdir config
cryptogen generate --output="crypto-config" --config=./cryptoconfig.yaml
configtxgen -profile OrdererGenesis -outputBlock ./config/genesis.block
configtxgen -profile supplychainChannel -outputCreateChannelTx ./config/channel.tx -channelID supplychainchannel
configtxgen -profile supplychainChannel -outputAnchorPeersUpdate ./config/warehouseMSPanchors.tx -channelID supplychainchannel -asOrg warehouseMSP
configtxgen -profile supplychainChannel -outputAnchorPeersUpdate ./config/collectionMSPanchors.tx -channelID supplychainchannel -asOrg collectionMSP
configtxgen -profile supplychainChannel -outputAnchorPeersUpdate ./config/customerMSPanchors.tx -channelID supplychainchannel -asOrg customerMSP