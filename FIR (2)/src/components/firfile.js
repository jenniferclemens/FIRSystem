import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Web3 from 'web3';
import Publicfir from '../abis/publicFIR.json'
const Portis = require('@portis/web3');
//import Instagram from '../abis/publicFIR.json'



class file extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
        account:''
    }
}

async componentWillMount() {
  //await this.loadWeb3()
  await this.loadBlockchainData()
  //this.callAPI()
}

async loadBlockchainData() {
  /*const web3 = window.web3
  const accounts = await web3.eth.getAccounts()*/
  //const portis = new Portis('cd4dd15a-646f-4919-ad16-aea99419ddaf', 'testnet');
  
  /*const portis = new Portis('cd4dd15a-646f-4919-ad16-aea99419ddaf', 'mainnet');
  const web3 = new Web3(portis.provider);*/

 const myLocalPOANode = {
    nodeUrl: 'http://localhost:7545',
    chainId: 1337
  };
  const portis = new Portis('cd4dd15a-646f-4919-ad16-aea99419ddaf', myLocalPOANode);
  //const web3 = new Web3(portis.provider);
  portis.showPortis();
  portis.setDefaultEmail('swakshath.rajkumar@gmail.com');
  //const accounts = await web3.eth.getAccounts();
  const use_portis = true;
  window.account = 'none';

window.contract_is_loaded = false;
portis.onLogin(
walletAddress => {
  window.account = walletAddress;
  this.setState({account:walletAddress})
  console.log('walletaddress',walletAddress)
  const fir_contract = new window.local_web3.eth.Contract(Publicfir,{from:walletAddress});
  window.fir_contract = fir_contract;
  console.log(window.fir_contract)
  window.contract_is_loaded = true;
}        
)

let web3;
if(use_portis){
web3 = new Web3(portis.provider);
window.local_web3 = web3;
}

  const accounts = web3.eth.getAccounts((error, accounts) => {
    console.log('kok'+accounts[0]);
    this.setState({account:accounts[0]})
    return accounts;
  });
  this.setState({ account: window.account })
  console.log('acc'+this.state.account);
    console.log('windowa'+window.account);
}
  render() {

    if(this.state.account ===''){ return(
      <div>Connect to portis first</div>
    )}

    return(

        <div>
          
          CONNECT TO PORTIS HERE
          <Form> 
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" name="Fname" required11="dd"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" name="Lname" required11="dd" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control name="addr" required11="dd"/>
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control name="city" required11="dd"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control name="zip" required11="dd"/>
    </Form.Group>
  </Form.Row>

  <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Offence Type</Form.Label>
      <Form.Control as="select" required11="dd">
        <option></option>
        <option>Theft</option>
        <option>Kidnapping</option>
        <option>Sexual offence</option>
        <option>Domestic offence</option>
        <option>Murder</option>
        <option>Other</option>
      </Form.Control >
    </Form.Group>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Description</Form.Label>
    <Form.Control name="desc" required11="dd"/>
  </Form.Group>



  <Form.Group controlId="formGridAddress1">
    <Form.Label>Date of Incident</Form.Label>
    <Form.Control type="date" name="dater" required11="dd"/>
  </Form.Group>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Mobile Number</Form.Label>
    <Form.Control name="number" required11="dd"/>
  </Form.Group>
  

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>


        </div>
    )
  }
}

export default file;
