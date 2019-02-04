import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Link from 'next/link';
import User from './User';
import Router from 'next/router';

import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';
import HomeLearning from './HomeLearning';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

class Signin extends Component {
  state = {
    name: '',
    password: '',
    email: ''
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <User>
        {({ data: { me } }) => {
          if (me) {
            Router.push({
              pathname: '/'
            });
          }
          return (
            <Mutation
              mutation={SIGNIN_MUTATION}
              variables={this.state}
              refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            >
              {(signup, { error, loading }) => {
                return (
                  <>
                    <Form
                      method="post"
                      onSubmit={async e => {
                        e.preventDefault();
                        const res = await signup();
                        this.setState({
                          name: '',
                          email: '',
                          password: ''
                        });
                      }}
                    >
                      <fieldset disabled={loading} aria-busy={loading}>
                        <h2>Sign into your Account</h2>
                        <Error error={error} />
                        <label htmlFor="email">
                          Virginia Mason Email
                          <input
                            type="text"
                            name="email"
                            placeholder="email"
                            value={this.state.email}
                            onChange={this.saveToState}
                          />
                        </label>
                        <label htmlFor="password">
                          Password (default is cerner login eg. j39877)
                          <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.saveToState}
                          />
                        </label>
                        <button type="submit">Sign In!</button>
                      </fieldset>
                    </Form>
                    <Link href="/resetPassword">
                      <a style={{ color: 'blue' }}>Reset Password</a>
                    </Link>
                  </>
                );
              }}
            </Mutation>
          );
        }}
      </User>
    );
  }
}

export default Signin;
