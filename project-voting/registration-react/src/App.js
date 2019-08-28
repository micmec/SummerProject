import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Web3 from 'web3';
import TruffleContract from 'truffle-contract';
import Registration from '../../build/contracts/Registration.json';

class App extends React.Component{
    constructor (props){
        super(props)

        //configure web3, allows DApp to talk to blockchain
        if (typeof web3 != 'undefined') {
            this.web3Provider = web3.currentProvider
        } else {
            this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545')
        }
      
          this.web3 = new Web3(this.web3Provider)

          //generate truffle contract from json file that react app can interact with (instead of using address and abi which can change based on environment)  
          this.election = TruffleContract(Registration)
          this.election.setProvider(this.web3Provider)
        }
   
    render() {

    }
}
