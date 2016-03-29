var util = require("ethereumjs-util");

function asPromise(fn) {
  return new Promise(function(accept, reject) {
    fn(function(err, result) {
      if (err) {
        reject(err);
      } else {
        accept(result);
      }
    });
  });
}

contract('RootContract', function(accounts) {
  it('this test will eventually fail', function (done) {
    var rootContract;
    var address;
    var address_via_logs;
    var logs;

    console.log("")

    RootContract.new().then(function (instance) {
      rootContract = instance;

      console.log("  RootContract address:                  ", instance.address);
      console.log("  Creating SubContract...");

      return rootContract.createSubcontract();
    })
    .then(function(tx) {
      return asPromise(web3.eth.getTransaction.bind(web3.eth, tx));
    })
    .then(function (details) {
      console.log("    Sent to (via getTransactionByHash):  ", details.to);

      // Get the address via the logs.
      // PS: There's no web3 api for this...
      return asPromise(web3.currentProvider.sendAsync.bind(web3.currentProvider, {
        jsonrpc: "2.0",
        method: "eth_getLogs",
        id: new Date().getTime(),
        params: [
          {
            fromBlock: "latest"
          }
        ]
      }));
    }).then(function(result) {
      if (result.error) throw new Error(result.error);

      logs = result.result;

      address_via_logs = "0x" + util.setLength(logs[0].data, 20).toString("hex");

      console.log("  SubContract address (via logs):        ", address_via_logs);

      return rootContract.subcontracts(0);
    }).then(function(addr) {

      console.log("  SubContract address (via RootContract):", addr);

      address = addr;
      return rootContract.subcontractNum();
    }).then(function(num) {
      console.log("  SubContract count   (via RootContract):", num.toNumber());

      return asPromise(web3.eth.getCode.bind(web3.eth, address_via_logs));
    }).then(function(code) {
      console.log("  SubContract code:                      ", code);

      return asPromise(web3.eth.getCode.bind(web3.eth, RootContract.address));
    }).then(function(code) {
      console.log("  RootContract code:                     ", code);

      console.log("");
      assert.notEqual("0x0000000000000000000000000000000000000000", address, "Undefined subcontract address")
    })
    .then(done)
    .catch(done);
  });
});
