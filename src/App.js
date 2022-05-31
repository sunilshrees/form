import { useState } from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './components/TextField';
import * as Yup from 'yup';

function App() {
    const [signIn, setSignIn] = useState(true);

    const validate = Yup.object({
        username: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Username is Required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
    });
    const validate2 = Yup.object({
        name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Username is Required'),
        pass: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
    });
    // const onSubmit = (e) => {
    //     e.preventDefault();
    // };

    return (
        <div className='container'>
            <div className='btn-container'>
                <div id={!signIn ? 'signUp' : 'signIn'}></div>
                <button
                    type='button'
                    className='signInBtn'
                    onClick={() => setSignIn(true)}
                    style={signIn ? { color: '#fff' } : { color: '#000' }}>
                    Sign In
                </button>
                <button
                    type='button'
                    className='signUpBtn'
                    onClick={() => setSignIn(false)}
                    style={!signIn ? { color: '#fff' } : { color: '#000' }}>
                    Sign Up
                </button>
            </div>

            <div className='formDiv'>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    validationSchema={validate}
                    onSubmit={(values) => {
                        console.log(values);
                    }}>
                    {(formik) => (
                        <div>
                            <Form
                                className='login'
                                style={!signIn ? { left: '-150%' } : null}>
                                <TextField
                                    placeholder='Username'
                                    name='username'
                                    type='text'
                                />
                                {/* <input
                                    type='text'
                                    placeholder='Username'
                                    name='username'
                                    className='username'
                                /> */}
                                <TextField
                                    placeholder='Password'
                                    name='password'
                                    type='password'
                                />
                                {/* <input
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    className='username'
                                /> */}

                                <div className='remember'>
                                    <input type='checkbox' />
                                    <label> Remember Password </label>
                                </div>

                                <div className='btnDiv'>
                                    <button type='submit' className='submit'>
                                        Login
                                    </button>
                                    <button type='reset' className='submit'>
                                        Reset
                                    </button>
                                </div>
                            </Form>
                        </div>
                    )}
                </Formik>
                <Formik
                    initialValues={{
                        name: '',
                        pass: '',
                        email: '',
                    }}
                    validationSchema={validate2}
                    onSubmit={(values) => {
                        console.log(values);
                    }}>
                    {(formik) => (
                        <div>
                            <Form
                                className='register'
                                style={signIn ? null : { left: '50%' }}>
                                <TextField
                                    placeholder='Username'
                                    name='name'
                                    type='text'
                                />
                                <TextField
                                    placeholder='Email'
                                    name='email'
                                    type='email'
                                />
                                <TextField
                                    placeholder='Password'
                                    name='pass'
                                    type='password'
                                />

                                <div className='btnDiv'>
                                    <button type='submit' className='submit'>
                                        Sign Up
                                    </button>
                                    <button type='reset' className='submit'>
                                        Reset
                                    </button>
                                </div>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default App;
