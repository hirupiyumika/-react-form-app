import React, { Component } from 'react'
import { Button,Form,Row } from 'react-bootstrap'; 

class Forms extends Component {

    state = {
        username : "", 
        password : ""
    } 

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`Hi ${this.state.username}`);
        event.preventDefault();
    }

    render() {
        return (
            <div style={{padding: '5%'}}>
                <Row className="justify-content-md-center">  
                    <h2>Form Component</h2>
                </Row>
 
                <Row className="justify-content-md-center" style={{padding: '2%'}}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username"  value={this.state.username} onChange={this.handleUsernameChange}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Row>
            </div>
        )
    }
}

export default Forms
