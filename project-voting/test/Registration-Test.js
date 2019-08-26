var Registration = artifacts.require("./Registration.sol");

contract("Registration", function(accounts){
    var registrationInstance

    if("adds a voter to mapping", function(){
        Registration.deployed.then(function(instance) {
            instance.addVoter("Emily","Russell", 19, "Female", 0xd66afc18aF7a12937E08Ae6f9a9654Ef1e2b3Dda);})
        addedVoter = Registration.deployed().then(function(instance) {
            registrationInstance = instance;
            return registrationInstance.voters(0xd66afc18aF7a12937E08Ae6f9a9654Ef1e2b3Dda);})
        return (addVoter.age != 0);
    });

});