# Web3 Based Lottery Application

This is an application built on top of Etherium network in a JavaScript environemnt.</br>

This application is made to simulate a lottery system</br>

## Features

- The account creating the contract in the chain becomes the manager of the lottery
- Other accounts can enter the lottery by sending in a minimum stake value of 0.01 ETH
- The manager can at any point pick a random winner for the lottery and that account will get all the ETH transferred to it
- The lottery then resets and new players can join in

## Code Explanation

- The contact code in written in [Solidity](https://soliditylang.org/), and resides in [Lottery.sol](/contracts/Lottery.sol) </br>
- [Compile](/compile.js) is used to compile this solidity code into an ABI and a bytecode for deployment.</br>
- [Deploy](/deploy.js) is used to deploy this code to any network</br>
  N.B: Setup which network you want to deploy to in env variables</br></br>
- To deploy use </br>
  `npm run deploy`

## Testing

- Testing is done using the mocha framework
- Test files reside in [test](/test/) folder
- To run tests use: </br>
  `npm run test`
