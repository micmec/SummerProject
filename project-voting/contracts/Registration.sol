pragma experimental ABIEncoderV2;

contract Registration {
    Voter[] public voters;

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

        Voter memory newVoter;
        newVoter.firstName = _firstName;
        newVoter.lastName = _lastName;
        newVoter.age = _age;
        newVoter.gender = _gender;
        newVoter.useraddress = _useraddress;

        voters.push(newVoter);
        return(true);
    }

//     //Not everyone can vote in every poll and so we must retrieve the list of registered voters and form a new list of elligible voters for each individual poll.
//     function getVoters() public view returns (string[] memory, string[] memory, uint[] memory, string[] memory, uint[] memory) {
//         uint length = voters.length;

//         string[] memory firstNames = new string[](length);
//         string[] memory lastNames = new string[](length);
//         uint[] memory ages = new uint[](length);
//         string[] memory genders = new string[](length);
//         uint[] memory ids = new uint[](length);

//         for (uint i = 0; i < voters.length; i++){
//             Voter memory currentVoter;
//             currentVoter = voters[i];

//             firstNames[i] = currentVoter.firstName;
//             lastNames[i] = currentVoter.lastName;
//             ages[i] = currentVoter.age;
//             genders[i] = currentVoter.gender;
//             ids[i] = currentVoter.id;
//         }

//         return(firstNames, lastNames, ages, genders, ids);
//     }

// }
