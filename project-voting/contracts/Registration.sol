pragma experimental ABIEncoderV2;

contract Registration {
    Voter[] public voters;
    uint public voterId;

    struct Voter {
        string firstName;
        string lastName;
        //uint age;
        //string gender;
       //string nationality;
        uint id;
    }

    function addVoter(string memory _firstName, string memory _lastName /*, uint _age, string memory _gender, string memory _nationality*/)
    public returns (uint) {

        Voter memory newVoter;
        newVoter.firstName = _firstName;
        newVoter.lastName = _lastName;
        //newVoter.age = _age;
        //newVoter.gender = _gender;
        //newVoter.nationality = _nationality;
        newVoter.id = voterId++;

        voters.push(newVoter);
        return(newVoter.id);
    }

    function getVoters() public view returns (string[] memory, string[] memory, uint[] memory) {
        
        uint length = voters.length;

        string[] memory firstNames = new string[](length);
        string[] memory lastNames = new string[](length);
        uint[] memory ids = new uint[](length);

        for (uint i = 0; i < voters.length; i++){
            Voter memory currentVoter;
            currentVoter = voters[i];

            firstNames[i] = currentVoter.firstName;
            lastNames[i] = currentVoter.lastName;
            ids[i] = currentVoter.id;
        }

        return(firstNames, lastNames, ids);
    }

}
