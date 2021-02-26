import React, {Component} from 'react'

import { Form, Button, Col } from "react-bootstrap";

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return (
            <div>
                <h1>Login Component</h1>
                <Form as={Col}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            name='email'
                            onChange={this.handleChange}
                            type="email" 
                            placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            name='password'
                            onChange={this.handleChange}
                            type="password" 
                            placeholder="Password" />
                    </Form.Group>
                    <br></br>
                    <Button block variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
    
}

export default Login
