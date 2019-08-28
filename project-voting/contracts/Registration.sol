pragma solidity ^0.5.8;

contract Registration {
    //in Solidity there is no way to determine size of mapping or iterate over mapping because in the mapping any key that we haven't set a value for will automatically return a default value.
    //Therefore I have added a count of the number of Voters 'registered'
    uint public voterCount;
    enum Gender {Male, Female, Other}

    struct Voter {
        string firstName;
        string lastName;
        uint age;
        Gender choice;
        address useraddress;
    }

    mapping(address => Voter) public voters;

    //pre-approved voters are inputted and added onto the list of valid voters.
    //the users address is used as their unique id this will allow registered voters to take part in polls later.
    function addVoter(string memory _firstName, string memory _lastName, uint _age, string memory _gender, address _useraddress)
    public returns (bool) {
        voterCount ++;
        Gender genderChoice;

        if (keccak256(abi.encodePacked(_gender)) == keccak256(abi.encodePacked("Male"))) {
            genderChoice = Gender.Male;
        }
        else if (keccak256(abi.encodePacked(_gender)) == keccak256(abi.encodePacked("Female"))) {
            genderChoice = Gender.Female;
        }
        else{
            genderChoice = Gender.Other;
        }

        //reference mapping and pass key which in this case is the address. The value assigned to the key is a new voter in the Voter structure type
        voters[_useraddress] = Voter(_firstName, _lastName, _age, genderChoice, _useraddress);
        return(true);
    }

}
