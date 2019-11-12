import React, { Component } from 'react';
import { Formik } from 'formik';
import ValidationSchema from './ValidationSchema';

export class SignInComponent extends Component {
    render() {
        return (
            <Formik
                initialValues={{ name: 'mr_jaurewi', password: '1234' }}
                validationSchema={ValidationSchema}
                onSubmit={credentials => {
                    this.props.signIn({ credentials }, this.props.history);
                }}
            >
                {props => {
                    const { values, handleChange, handleSubmit } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <h5>Sign in</h5>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text" id="name" name="name" value={values.name} onChange={handleChange} />
                                <label htmlFor="pass">Password</label>
                                <input type="password" id="pass" name="password" value={values.password} onChange={handleChange} />
                            </div>
                            <button type="submit">Sign up</button>
                        </form>
                    );
                }}
            </Formik>
        );
    }
}
