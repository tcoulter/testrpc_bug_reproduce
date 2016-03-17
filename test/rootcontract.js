contract('RootContract', function(accounts) {
it('this test will eventually fail', function (done) {
    var rootContract, newSubcontract;
    var mainaccount = accounts[0];
    var otheraccount = accounts[1];

    RootContract.new({
        from: mainaccount
      })
      .then(function (instance) {
        rootContract = instance;
        return rootContract.createSubcontract({
          from: otheraccount
        });
      })
      .then(function (tx) {
        // console.log('New Subcontract creation transaction hash is: ', tx);
        return rootContract.getSubcontract(0);
      })
      .then(function (address) {
        assert.notEqual("0x0000000000000000000000000000000000000000", address, "Undefined subcontract address")
      })
      .then(done)
      .catch(done);
  });

it('this test never fails', function (done) {
    var rootContract, newSubcontract;
    var mainaccount = accounts[0];
    var otheraccount = accounts[1];
    var root = RootContract.deployed();
    root.createSubcontract({
          from: otheraccount
        })
      .then(function (tx) {
        // console.log('New Subcontract transaction hash is: ', tx);
        return root.getSubcontract(0);
      })
      .then(function (address) {
        assert.notEqual("0x0000000000000000000000000000000000000000", address, "Undefined subcontract address")
      })
      .then(done)
      .catch(done);
  });
});
