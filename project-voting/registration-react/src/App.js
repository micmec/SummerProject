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
    render() {
        return(
            <div className = "wrapper">
                <div className ="form-wrapper">
                    <h1>Register To Vote</h1>
                    <form onSubmit = {this.handleSubmit}>
                        <div className = "firstName">
                            <label htmlFor = "firstName">First Name</label>
                            <input type = "text" name ="firstname"></input>
                        </div>
                        <div className = "lastName">
                            <label htmlFor = "lastName">Last Name</label>
                            <input type = "text" name ="lastname"></input>
                        </div>
                        <div className = "age">
                            <label htmlFor = "age">Age</label>
                            <input type = "text" name ="age"></input>
                        </div>
                        <div className = "gender">
                            <label htmlFor = "gender">Gender</label>
                            <select name = "gender">
                                <option value = "Male">Male</option>
                                <option value = "Female">Female</option>
                                <option value ="Other">Other</option>
                            </select>
                        </div>
                        <div classname = "register">
                            <button type = "submit">Register</button>
                            <small>Already Registered to Vote?</small>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

