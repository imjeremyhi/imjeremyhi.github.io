import React, { Component } from 'react';
import styled from 'styled-components';

type Props = {};

type State = {
    name: string,
    email: string,
    message: string,
};

const Input = styled.input`
    width: 100%;
    display: block;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 15px;
`;

const TextArea = styled.textarea`
    width: 100%;
    display: block;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 15px;
`;

const NAME_PLACEHOLDER = 'Name';
const EMAIL = 'Email Address';
const MESSAGE = 'Send me a message';

export class ContactForm extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event: any) {
        switch (event.target.placeholder) {
            case NAME_PLACEHOLDER:
                this.setState({
                    name: event.target.value
                });
                break;
            case EMAIL:
                this.setState({
                    email: event.target.value
                });
                break;
            case MESSAGE:
                this.setState({
                    message: event.target.value
                });
        }
    }
  
    handleSubmit(event: any) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input type="text" value={this.state.name} onChange={this.handleChange} placeholder={"Name"} />
                <Input type="text" value={this.state.email} onChange={this.handleChange} placeholder={"Email Address"} />
                <TextArea rows={5} value={this.state.message} onChange={this.handleChange} placeholder={"Send me a message"} />

                <Input type="submit" value="Submit" />
            </form>
        );
    }
}