# Money_Betting Smart contract.

## Overview:

### This is a smart contract which was written to distribute the winners rewards based on the betting games like rock,paper and scissors or a cup game which is played by the users in the front-end.

## Functionality :
 The main working of the smart contract lies that the user would bet some amount when he creates a bet with the another user . Once the second user joins the room in the front-end the room would be locked and both users would pay the betting amount which was created by the first user to the escort smart contract . As soon as the game completed the backend team would send the winners address to the escort smart contract . The contract verifies the winner and would validates the address between both users and cut 2% service fee from the final bet amount. The final amount after the service fee deduction would be sent to the winner of the game.
 
 ## Features for the users:
 1. Deposit the funds in order to play the game .
 2. Withdraw the funds in case the second user got disconnected .
 3. Claim the rewards if you win the game .
 
 ## Features for owner:
 
 1. Can set the service fee percentage as per his convineance .
 2. Could directly with draw the funds from the escort smart contract.
 3. Can check the current balance in the escort smart contract.
 
## Prerequisites:
  Polygon Mumbai deployment :
  - Java script
  - A free Infura Project Id key for Polygon mumbai testnet.
  - Polygonscan of mumbai net url 
  - A private key of the meta mask account 
  
## Installation :
Clone the repo:

```shell
  git clone https://github.com/mohindar99/Money_Betting.git 
  cd Money_Betting 
   ```
   
## Compiling smart contract:
- We are compiling the smart contract to get the ABI in order to interact with the smart contract after deployment.
- Run the command
``` shell
npx hardhat compile
```


## Deploy to Polygon Mumbai Testnet :





Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
