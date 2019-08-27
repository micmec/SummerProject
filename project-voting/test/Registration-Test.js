var Registration = artifacts.require("./Registration.sol");

//declare contract and inject accounts that exist in development environment
contract("Registration", function(accounts){

    //it() is a test case
    //provide a description of test
    it("adds a voter to mapping", function(){
        Registration.deployed().then(function(instance) {
            instance.addVoter("Emily","Russell",19,"Female","0xd66afc18aF7a12937E08Ae6f9a9654Ef1e2b3Dda");
        });
        return Registration.deployed().then(function(instance) {
            return instance.voterCount();
            }).then(function(count) {
            assert.equal(count, 1);
            });
    });

    
    it("adds correct details to mapping", function(){
        return Registration.deployed().then(function(instance) {
            return instance.voters("0xd66afc18aF7a12937E08Ae6f9a9654Ef1e2b3Dda");
        }).then(function(voter) {
            assert.equal(voter[0],"Emily","contains correct first name");
            assert.equal(voter[1],"Russell","contains correct last name");
            assert.equal(voter[2],19,"contains correct age");
            assert.equal(voter[3],"Female","contains correct gender");
            assert.equal(voter[4],"0xd66afc18aF7a12937E08Ae6f9a9654Ef1e2b3Dda", "contains correct address");
        });
    });

});