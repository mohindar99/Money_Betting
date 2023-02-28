//SPDX-License-Identifier:MIT
// Cup_game 
// creator Amar

pragma solidity ^0.8.6;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Bid_game2 is Ownable {

    struct data{
        address user1;
        address user2;
        uint amount ;
    }
    uint public service_fee_percent;

    mapping (uint=>data) bid_id ;

    // data in the blockchain for winners
    event winners(address winner , uint amount);

    constructor(uint Service_Fee) {
        service_fee_percent = Service_Fee;
    }
     // This is called when the user want to set the service fee
     
    function set_service_fee(uint Service) external onlyOwner {
        service_fee_percent = Service;
    }

    // This is the function called when the users want to create a bid to play

    function create_bid(uint bidding_id, uint value) external returns(bool){
        require(msg.sender!=address(0),"Invalid address");
        require(value>0,"It minimum value must be greater than 0");
        uint total_bid = 2*value;  
        bid_id[bidding_id].amount=total_bid;
        return true;
    }
    // This is called when the user wants to join a bit which is already created by another user

    function join_bid(uint bidding_id) payable external returns(bool){
        require(msg.sender!=address(0),"user validation");
        require(msg.value>=bid_id[bidding_id].amount/2,"The amount is insufficient");
        if(bid_id[bidding_id].user1==address(0)){
            bid_id[bidding_id].user1=msg.sender;
        }else{
            bid_id[bidding_id].user2=msg.sender;
        }
        return true;
    }

    // Incase the 2nd user had not participated in the bid then the user1 can withdraw the funds back

    function cancel_bid(uint bidding_id) external returns(bool){
        require((bid_id[bidding_id].user1==msg.sender && bid_id[bidding_id].user2==address(0)),"Cannot cancel the bid as the second user paid the bid amount");
            payable(msg.sender).transfer(bid_id[bidding_id].amount/2);      
            delete bid_id[bidding_id];
            return true;
    }

    // Once the winner is decided this function is called 

    function winner(uint bidding_id , address payable won) external returns(bool){
        require(won==msg.sender,"Not the winner");
        require((bid_id[bidding_id].user1==won||bid_id[bidding_id].user2==won),"Not a valid winner");

        uint service_amount = (bid_id[bidding_id].amount * service_fee_percent)/100;

        uint winning_price = bid_id[bidding_id].amount-service_amount;

            won.transfer(winning_price);

            emit winners(won,winning_price);
            delete bid_id[bidding_id];
            return true;  
    }

    function with_draw_funds() external onlyOwner{
        address Owner = owner();
        payable(Owner).transfer(address(this).balance);
    }

    function contract_balance() view external onlyOwner returns (uint){
        return address(this).balance;
    }
}
