import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Web3 from 'web3';
const Portis = require('@portis/web3');



class App extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
        //email:"",
        //phoneno:"",
        //apiResponse:"",
        mod:'off'

    }
    
   // this.onFormSubmit = this.onFormSubmit.bind(this)
  }


  
    /*onFormSubmit(e) {
    e.preventDefault()
    console.log((e.target.toString()))
    const formData = new FormData(e.target)
    console.log(formData.toString())
    const formDataObj = Object.fromEntries(formData.entries())
    console.log('amdm'+formData.entries())
    console.log(JSON.stringify(formDataObj))
  }*/

  /*handleChange(e) {
    this.setState({ email: e.target.email });
  }*/

  
  
  
  render() {

    function openauth(){

    }

    const onFormSubmit = e => {
      e.preventDefault()
      const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries())
      console.log(formDataObj)
      fetch("http://localhost:8080/otp", {
    method: "POST",
    body: JSON.stringify(formDataObj),
  headers: {
		'Content-type': 'application/json; charset=UTF-8'
	}
    })
        .then(this.setState({mod:'otp'}))
        .then(res => console.log(res))
        //.then(res => this.setState({ apiResponse: res }));
    }



    const onFormotp = e => {
      e.preventDefault()
      const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries())
      console.log(formDataObj)
      fetch("http://localhost:8080/checkotp", {
    method: "POST",
    body: JSON.stringify(formDataObj),
  headers: {
		'Content-type': 'application/json; charset=UTF-8'
	}
    })
        .then(res=> res.json())
        .then(function(data){
          if(data.otp==true)
          {
              window.location.href="/firfile"
          }
          else 
          {

          }
        })
        //.then(res => this.setState({ apiResponse: res }));
    }

    const publicclick = e => {
      e.preventDefault()
      this.setState({mod:'on'})
    }

    


    function MyVerticallyCenteredModal1(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              ENTER OTP
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Please check registered mobile number</h4>
            <Form onSubmit={onFormotp}>
            <Form.Group controlId="OTP">
              <Form.Control type="text" name="otp" required={true}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
        
      );
    }

    function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              FILE FIR
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Enter Mobile number for authentication:</h4>
            <Form onSubmit={onFormSubmit}>
            <Form.Group controlId="Mobile">
              <Form.Control type="text" name="mobile" required={true}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }

    function Viewotp() {
      const [modalShow1, setModalShow1] = React.useState(true);
    
      return (
        <>
    
          <MyVerticallyCenteredModal1
            show={modalShow1}
            onHide={() => setModalShow1(false)}
          />
        </>
      );
    }

    function Viewfir() {
      const [modalShow, setModalShow] = React.useState(false);
    
      return (
        <>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Launch vertically centered modal
          </Button>
    
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>
      );
    }


    


    var content = <div>dnlkd</div>

    if(this.state.mod==='otp'){
      return(
        <div>
          <Viewotp />
          jkewnjnf
        </div>
      )
    }

    return(
      <div>
        <Viewfir />
      </div>
    )

  }
}

export default App;
