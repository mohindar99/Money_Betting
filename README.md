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
  - Hardhat configuration.
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

## Polygon Mumbai Testnet:

- The polygon mumbai test net is not a default network which is present by default.
- We need to add it manually to the meta mask in order to deploy in it .
- Follow the steps as per this [LINK](https://docs.unstoppabledomains.com/manage-domains/guides/add-polygon-to-metamask/) in order to configure the network to the metamask 

## Run the tests :

- The tests might succeed or fail based on the smart contract functionalities.
- To run the tests locally we might need mocha and chai frame works in the Hardhat.
- Once the test script is done . Run the command :
  ```shell 
  npx hardhat test
  ```
  

## Deploy to Polygon Mumbai Testnet :

- Add a ``.env`` file with the same contents of ``.env.example``,but replaced with your variables.
- Run the command :

  ```shell
  npx hardhat run scripts/deploy.js --network mumbai
  ```
The script will :

1. It would deploy the smart contract of the game with a default service fee of 2% in the polygon mumbai test net.
2. We need to verify the contract in the [polygonscan.mumbai](https://mumbai.polygonscan.com/) 

## Verification of Contract:

1. In order to verify we need to go to the [polygonscan.mumbai](https://mumbai.polygonscan.com/) .
2. The smart contract need to be flattened in order to match with the bytecode which was generated while deploying with the present one.
3. The compiler version need to be matched so that the final verification is done and to display the smart contract in the polygonscan.
4. With this we can directly interact with the smart contract from the polygonscan if we are a valid user.

## Validation of contract:
- The smart contract is deployed in the polygonscan.mumbai with the address of ``0x798c6D8df7ef7d50f2402e00F84a166fdd95faf8``
- As it is verified you can directly interact with the contract for better understanding .

### Any contributions much appreciated !!

If it was helpful please consider donating:

``0x0997650B553D83B9433c3bEe8669Ff413Be03196``

# Happy Hacking


