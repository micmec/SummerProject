pragma solidity ^0.5.8;

contract Registration {

    uint voterCount;

    struct Voter {
        string firstName;
        string lastName;
        uint age;
        string gender;
        address useraddress;
    }

    mapping(address => Voter) public voters;

    //pre-approved voters are inputted and added onto the list of valid voters.
    //the users address is used as their unique id this will allow registered voters to take part in polls later.
    function addVoter(string memory _firstName, string memory _lastName, uint _age, string memory _gender, address _useraddress)
    public returns (bool) {
        voterCount ++;
        voters[_useraddress] = Voter(_firstName, _lastName, _age, _gender, _useraddress);
        return(true);
    }

}
