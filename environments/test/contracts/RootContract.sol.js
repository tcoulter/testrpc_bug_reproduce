// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"createSubcontract","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"subcontractNum","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"subcontracts","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"integer","type":"uint256"}],"name":"LogInteger","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"}],"name":"LogAddress","type":"event"}],
    binary: "60606040526000600155610162806100176000396000f3606060405260e060020a60003504631530b00e81146100315780632d8f679e1461010b578063984d5e2314610114575b005b61002f6000606060168061014c833901809050604051809103906000f06001805460408051918552602085815294819020805473ffffffffffffffffffffffffffffffffffffffff1916851790558254830190925573ffffffffffffffffffffffffffffffffffffffff83168152905191927fb123f68b8ba02b447d91a6629e121111b7dd6061ff418a60139c8bf00522a28492918290030190a17f4853cb337d3d7bba45aff03334ca3e5698c2188d7307fb5ccefb189e596009386001600050546040518082815260200191505060405180910390a150565b61014260015481565b61014260043560006020819052908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6060908152602090f3606060405260068060106000396000f3606060405200",
    unlinked_binary: "60606040526000600155610162806100176000396000f3606060405260e060020a60003504631530b00e81146100315780632d8f679e1461010b578063984d5e2314610114575b005b61002f6000606060168061014c833901809050604051809103906000f06001805460408051918552602085815294819020805473ffffffffffffffffffffffffffffffffffffffff1916851790558254830190925573ffffffffffffffffffffffffffffffffffffffff83168152905191927fb123f68b8ba02b447d91a6629e121111b7dd6061ff418a60139c8bf00522a28492918290030190a17f4853cb337d3d7bba45aff03334ca3e5698c2188d7307fb5ccefb189e596009386001600050546040518082815260200191505060405180910390a150565b61014260015481565b61014260043560006020819052908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6060908152602090f3606060405260068060106000396000f3606060405200",
    address: "0x0afa202e30ac0bb5a9c973e3812c7d46cc9e0022",
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
