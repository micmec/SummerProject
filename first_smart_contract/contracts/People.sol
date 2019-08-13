pragma experimental ABIEncoderV2;

contract People {

    Person[] public people;

    struct Person {
        string firstName;
        string lastName;
        uint age;
    }

    function addPerson(string memory _firstName, string memory _lastName, uint _age) public returns (bool success) {

        Person memory newPerson;
        newPerson.firstName = _firstName;
        newPerson.lastName = _lastName;
        newPerson.age = _age;

        people.push(newPerson);
        return true;

    }

    function getPeople() public view returns (string[] memory, string[] memory, uint[] memory) {

        uint length = people.length;

        string[] memory firstNames = new string[](length);
        string[] memory lastNames = new string[](length);
        uint[] memory ages = new uint[](length);

        for (uint i = 0; i < people.length; i++){
            Person memory currentPerson;
            currentPerson = people[i];

            firstNames[i] = currentPerson.firstName;
            lastNames[i] = currentPerson.lastName;
            ages[i] = currentPerson.age;
        }

        return(firstNames, lastNames, ages);
    }

}