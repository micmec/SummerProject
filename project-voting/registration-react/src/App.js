import React from 'react';
import './App.css';
// import Web3 from 'web3';

// const address = '0xF6523377a516A557193CE8682cb6D6B7C3Ca1A26'
// const abi = [
//     {
//       "constant": true,
//       "inputs": [],
//       "name": "voterCount",
//       "outputs": [
//         {
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "payable": false,
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "constant": true,
//       "inputs": [
//         {
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "name": "voters",
//       "outputs": [
//         {
//           "name": "firstName",
//           "type": "string"
//         },
//         {
//           "name": "lastName",
//           "type": "string"
//         },
//         {
//           "name": "age",
//           "type": "uint256"
//         },
//         {
//           "name": "choice",
//           "type": "uint8"
//         },
//         {
//           "name": "useraddress",
//           "type": "address"
//         }
//       ],
//     }]

// export default new  Web3.eth.Contract(abi,address)

class App extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          firstName: null,
          lastName: null,
          age: 0,
          gender: "Male",
          address: 0x0,
          formErrors: {
            firstName: "",
            lastName: "",
            age: ""
          }
        };

    }

    handleChange(e) {
        e.preventDefault()
        const {name, value} = e.target
        let formErrors = this.state.formErrors
    
        switch (name) {
            case "firstName":
              formErrors.firstName =
                value.length < 2 && value.length >0 ? "minimum 2 characaters required" : ""
              break;
            case "lastName":
              formErrors.lastName =
                value.length < 3 & value.length >0 ? "minimum 3 characaters required" : ""
              break;
            case "age":
              formErrors.age = isNaN(value) & value.length > 0
                ? "age not valid, please enter a number"
                : "";
              break;
            default:
              break;
          }  

        this.setState({formErrors, [name]: value})
    }

    handleSubmit() {

    }

    render() {
        return(
            <div className = "wrapper">
                <div className ="form-wrapper">
                    <h1>Register To Vote</h1>
                    <form onSubmit = {this.handleSubmit}>
                        <div className = "firstName">
                            <label htmlFor = "firstName">First Name</label>
                            <input type = "text" name ="firstname" onChange = {this.handleChange} ></input>
                        </div>
                        <div className = "lastName">
                            <label htmlFor = "lastName">Last Name</label>
                            <input type = "text" name ="lastname" onChange = {this.handleChange}></input>
                        </div>
                        <div className = "age">
                            <label htmlFor = "age">Age</label>
                            <input type = "number" name ="age" onChange = {this.handleChange}></input>
                        </div>
                        <div className = "gender">
                            <label htmlFor = "gender">Gender</label>
                            <select name = "gender" onChange = {this.handleChange}>
                                <option value = "Male">Male</option>
                                <option value = "Female">Female</option>
                                <option value ="Other">Other</option>
                            </select>
                        </div>
                        <div classname = "registerVoter">
                            <button type = "submit" class = "register-button">Register</button>
                            <small class = "register-small">Already Registered to Vote?</small>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;