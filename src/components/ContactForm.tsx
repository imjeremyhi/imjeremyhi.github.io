import React, { Component } from 'react';
import styled from 'styled-components';
import Alert from '@material-ui/lab/Alert';
import Button from 'react-bootstrap/Button';
import Snackbar from '@material-ui/core/Snackbar';

type Props = {};

type State = {
    name: string,
    email: string,
    message: string,
    showSuccessAlert: boolean,
    showFailureAlert: boolean
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
const EMAIL_PLACEHOLDER = 'Email Address';
const MESSAGE_PLACEHOLDER = 'Send me a message';

export class ContactForm extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            showSuccessAlert: false,
            showFailureAlert: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSuccessClose = this.handleSuccessClose.bind(this);
        this.handleFailureClose = this.handleFailureClose.bind(this);
    }
  
    handleChange(event: any) {
        switch (event.target.placeholder) {
            case NAME_PLACEHOLDER:
                this.setState({
                    name: event.target.value
                });
                break;
            case EMAIL_PLACEHOLDER:
                this.setState({
                    email: event.target.value
                });
                break;
            case MESSAGE_PLACEHOLDER:
                this.setState({
                    message: event.target.value
                });
        }
    }

    handleSuccessClose() {
        this.setState({
            showSuccessAlert: false
        });
    }

    handleFailureClose() {
        this.setState({
            showFailureAlert: false
        });
    }
  
    async handleSubmit(event: any) {
        const data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
            currentDate: new Date().toString()
        };
        
        const addRequestUrl = 'https://us-central1-personal-website-2c8eb.cloudfunctions.net/addRequest';
        try {
            await fetch(addRequestUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'no-cors',
                body: JSON.stringify(data)
            });

            this.setState({
                showSuccessAlert: true
            });
        } catch (e) {
            this.setState({
                showFailureAlert: true
            });
        }
    }
  
    render() {
        const { name, email, message, showSuccessAlert, showFailureAlert } = this.state;

        return (
            <>
                <Input type="text" value={name} onChange={this.handleChange} placeholder={NAME_PLACEHOLDER} />
                <Input type="text" value={email} onChange={this.handleChange} placeholder={EMAIL_PLACEHOLDER} />
                <TextArea rows={5} value={message} onChange={this.handleChange} placeholder={MESSAGE_PLACEHOLDER} />

                <Button variant="success" onClick={this.handleSubmit} style={{ float: 'right' }}>
                    Submit
                </Button>
                <Snackbar open={showSuccessAlert} autoHideDuration={3000} onClose={this.handleSuccessClose}>
                    <Alert onClose={this.handleSuccessClose} severity="success">
                        Thanks for your message!
                    </Alert>
                </Snackbar>
                <Snackbar open={showFailureAlert} autoHideDuration={5000} onClose={this.handleFailureClose}>
                    <Alert onClose={this.handleFailureClose} severity="warning">
                        Oops something went wrong! Please try again or at a later time 
                    </Alert>
                </Snackbar>
            </>
        );
    }
}