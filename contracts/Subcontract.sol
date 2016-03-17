contract Subcontract {
	struct User
	{
			bool admin;
	}

 	mapping(address => User) public users;

	function Subcontract() {
		users[tx.origin].admin=true;
	}

	function getUserInfo(address userAddress) constant returns (bool admin){
		admin=users[userAddress].admin;
	}


	function () {
		throw;
	}

}
