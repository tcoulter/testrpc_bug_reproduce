// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserInfo","outputs":[{"name":"admin","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"users","outputs":[{"name":"admin","type":"bool"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "6060604052600160a060020a0332166000908152602081905260409020805460ff19166001179055607d8060336000396000f36060604052361560275760e060020a60003504636386c1c78114602d578063a87430ba146063575b60006002565b73ffffffffffffffffffffffffffffffffffffffff6004351660009081526020819052604090205460ff165b6060908152602090f35b605960043560006020819052908152604090205460ff168156",
    unlinked_binary: "6060604052600160a060020a0332166000908152602081905260409020805460ff19166001179055607d8060336000396000f36060604052361560275760e060020a60003504636386c1c78114602d578063a87430ba146063575b60006002565b73ffffffffffffffffffffffffffffffffffffffff6004351660009081526020819052604090205460ff165b6060908152602090f35b605960043560006020819052908152604090205460ff168156",
    address: "0xed2bf2f2815ec8860cf55baa4f22c94ce63a18bd",
    generated_with: "2.0.6",
    contract_name: "Subcontract"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Subcontract error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("Subcontract error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Subcontract error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Subcontract error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Subcontract = Contract;
  }

})();
