import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';
import { signUpStart } from '@redux/user/user.actions';
import { connect } from 'react-redux';

const defaultState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

class Signup extends React.Component {
  constructor() {
    super();

    this.state = defaultState;
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { signUpStart } = this.props;

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');

      return;
    }

    signUpStart({
      email,
      password,
      displayName,
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          ></FormInput>
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userInfo) => dispatch(signUpStart(userInfo)),
});

export default connect(null, mapDispatchToProps)(Signup);
