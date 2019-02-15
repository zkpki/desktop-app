import React, { Component } from 'react';
import {
    Form, Input, Button,
} from 'antd';

import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LoginFormWrapper } from './styles';

const FormItem = Form.Item;

class SignupForm extends Component {

    handleSignup = (e) => {
        const { history } = this.props;
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            
            history.push('/signup-success');
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <LoginFormWrapper>
                <Form justify="center" align="middle" onSubmit={this.handleSignup}>
                    <FormItem>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input placeholder="Username"  />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('passcode', {
                            rules: [{ required: true, message: 'Please input your passcode!' }],
                        })(
                            <Input placeholder="Passcode" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button onClick={this.handleSignup} type="default" block>
                            Signup
                        </Button>
                    </FormItem>
                </Form>
            </LoginFormWrapper>
        );
    }
}

SignupForm.propTypes = {
    history: PropTypes.object,
};

const WrappedSignupForm = Form.create({ name: 'signup_form' })(SignupForm);

export default WrappedSignupForm;
