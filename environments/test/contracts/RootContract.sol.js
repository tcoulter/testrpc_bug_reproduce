// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"createSubcontract","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getSubcontract","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260028054600160a060020a0319163317905561017d806100246000396000f36060604052361560315760e060020a60003504631530b00e811460375780638da5cb5b14608b578063afe07dda14609c575b60cb6002565b60cb606060b0806100cd833901809050604051809103906000f0600180546000908152602081905260409020805473ffffffffffffffffffffffffffffffffffffffff191692909217909155805481019055565b60b8600254600160a060020a031681565b600435600090815260208190526040902054600160a060020a03165b600160a060020a03166060908152602090f35b006060604052600160a060020a0332166000908152602081905260409020805460ff19166001179055607d8060336000396000f36060604052361560275760e060020a60003504636386c1c78114602d578063a87430ba146063575b60006002565b73ffffffffffffffffffffffffffffffffffffffff6004351660009081526020819052604090205460ff165b6060908152602090f35b605960043560006020819052908152604090205460ff168156",
    unlinked_binary: "606060405260028054600160a060020a0319163317905561017d806100246000396000f36060604052361560315760e060020a60003504631530b00e811460375780638da5cb5b14608b578063afe07dda14609c575b60cb6002565b60cb606060b0806100cd833901809050604051809103906000f0600180546000908152602081905260409020805473ffffffffffffffffffffffffffffffffffffffff191692909217909155805481019055565b60b8600254600160a060020a031681565b600435600090815260208190526040902054600160a060020a03165b600160a060020a03166060908152602090f35b006060604052600160a060020a0332166000908152602081905260409020805460ff19166001179055607d8060336000396000f36060604052361560275760e060020a60003504636386c1c78114602d578063a87430ba146063575b60006002565b73ffffffffffffffffffffffffffffffffffffffff6004351660009081526020819052604090205460ff165b6060908152602090f35b605960043560006020819052908152604090205460ff168156",
    address: "0x96c89d17e35a95712b55895165f2e6cd4ce0a896",
    generated_with: "2.0.6",
    contract_name: "RootContract"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("RootContract error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("RootContract error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("RootContract error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("RootContract error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.RootContract = Contract;
  }

})();
