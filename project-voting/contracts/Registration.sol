pragma experimental ABIEncoderV2;

contract Registration {
    Voter[] public voters;
    uint public voterId;

    struct Voter {
        string firstName;
        string lastName;
        uint age;
        string gender;
        string nationality;
        uint id;
    }

    //pre-approved voters are inputted and added onto the list of valid voters.
    //A unique id is generated and outputted to the user - this should be kept secret and will allow registered voters to apply only once to take part in polls later.
    function addVoter(string memory _firstName, string memory _lastName, uint _age, string memory _gender, string memory _nationality)
    public returns (uint) {

        Voter memory newVoter;
        newVoter.firstName = _firstName;
        newVoter.lastName = _lastName;
        newVoter.age = _age;
        newVoter.gender = _gender;
        newVoter.nationality = _nationality;
        //as a starting contract, the generated voterID is basic.
        newVoter.id = voterId++;

        voters.push(newVoter);
        return(newVoter.id);
    }

    //Not everyone can vote in every poll and so we must retrieve the list of registered voters and form a new list of elligible voters for each individual poll.
    function getVoters() public view returns (string[] memory, string[] memory, uint[] memory, string[] memory, string[] memory, uint[] memory) {
        uint length = voters.length;

        string[] memory firstNames = new string[](length);
        string[] memory lastNames = new string[](length);
        uint[] memory ages = new uint[](length);
        string[] memory genders = new string[](length);
        string[] memory nationalities = new string[](length);
        uint[] memory ids = new uint[](length);

        for (uint i = 0; i < voters.length; i++){
            Voter memory currentVoter;
            currentVoter = voters[i];

            firstNames[i] = currentVoter.firstName;
            lastNames[i] = currentVoter.lastName;
            ages[i] = currentVoter.age;
            genders[i] = currentVoter.gender;
            nationalities[i] = currentVoter.nationality;
            ids[i] = currentVoter.id;
        }

        return(firstNames, lastNames, ages, genders, nationalities, ids);
    }

}
