import "Subcontract.sol";
contract RootContract {
   event LogInteger(uint256 integer);
   event LogAddress(address addr);

   mapping (uint => address) public subcontracts;
   uint public subcontractNum;

   function RootContract() {
     subcontractNum = 0;
   }

   function createSubcontract()
   {
     address addr = address(new Subcontract());

     subcontracts[subcontractNum] = addr;
     subcontractNum++;

     LogAddress(addr);
     LogInteger(subcontractNum);
   }
}
