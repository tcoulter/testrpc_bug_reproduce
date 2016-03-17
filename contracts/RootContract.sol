import "Subcontract.sol";
contract RootContract {

   mapping (uint => Subcontract) private subcontracts;
   uint subcontractNum;

   address public owner;

   function RootContract() {
        owner = msg.sender;
   }

   function createSubcontract()
   {
     subcontracts[subcontractNum] = new Subcontract();
     subcontractNum ++;
   }

   function getSubcontract(uint id) constant returns (address)
   {
     return subcontracts[id];
   }

   function () {
      throw;
   }
}
