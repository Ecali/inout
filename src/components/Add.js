import React, { Component } from 'react'

import { Form, Col, Button, InputGroup } from "react-bootstrap";

class Add extends Component {

    constructor(props){
        super(props);
        this.state = {
            titolo : '',
            importo : '',
            conto : '',
            entrata : false,
            data : ''
        }
        this.handleChange = this.handleChange.bind(this);
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
                <h2>Inserisci un Movimento</h2>
                <br></br>
                <Form bg='drak' variant='dark'>
                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>Titolo</Form.Label>
                            <Form.Control 
                                name='titolo'
                                onChange={this.handleChange}
                                placeholder="Bolletta gas, regalo ..." />
                        </Form.Group>
                        <Form.Row as={Col}>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Importo</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control 
                                name='importo'
                                onChange={this.handleChange}
                                type="number" 
                                placeholder="Inserisci l'ammontare" />
                                <InputGroup.Append>
                                <   InputGroup.Text>€</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Data</Form.Label>
                        <Form.Control 
                            name='data'
                            onChange={this.handleChange}
                            type="date" 
                            placeholder="Inserisci la data" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Conto</Form.Label>
                        <Form.Control 
                            name='conto'
                            onChange={this.handleChange}
                            as="select" 
                            defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Unicredit</option>
                            <option>Paypal</option>
                            <option>Revolut</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                            name='entrata'
                            onChange={this.handleChange}
                            type="checkbox" 
                            label="Uscita ? " />
                    </Form.Group>
                    <Button block as={Col} variant="primary" type="submit">
                        Inserisci
                    </Button>
                </Form>
            </div>
        )
    }
    
}

export default Add
