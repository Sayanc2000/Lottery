const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')
require('dotenv').config()

const provider = new HDWalletProvider(
    process.env.PHRASE,
    'https://sepolia.infura.io/v3/d496cb87d5f84a4fb7d0aa60514342d5'
)
const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()
    console.log('Deploying contract from account ', accounts[0])

    result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ from: accounts[0], gas: '1000000' })
    
    console.log('Contract deployed to ', result.options.address)
    provider.engine.stop()
}

deploy()