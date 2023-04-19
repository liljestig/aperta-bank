/* The create account form was created using Bootstrap and Formik,
   and allows the user to sign up for a new account. */

import {useFormik} from 'formik';
import {useState, useContext} from 'react';

/* Import UserContext from App.js */
import {UserContext} from '../App.js';

/* Import Card from React-Bootstrap */
import Card from 'react-bootstrap/Card';

/* Adding card styling */
import './Card.css';

const CreateAccount = () => {

    /* Create local objects */
    const [show, setShow] = useState(true);
    const [userName, setUserName] = useState('');

    /* Store user context object */
    const ctx = useContext(UserContext);

    /* Initialize Formik */
    const formik = useFormik({

        initialValues: {
            name: '',
            email: '',
            password: '',
        },

        onSubmit: (values, {resetForm}) => {

            /* Copy values to variables */
            let name = formik.values.name;
            let email = formik.values.email;
            let password = formik.values.password;

            /* Create account using variables */
            ctx.users.push({name, email, password, balance:100});

            /* Update React UserName variable */
            setUserName(formik.values.name);

            /* Hide data entry card */
            setShow(false);

            /* Clear form values */
            resetForm();
        },

        validate: (values) => {

            /* Initialize errors variable */
            let errors = {};

            /* Check name is entered */
            if (!values.name) errors.name = 'Name is required';

            /* Check valid email is entered */
            if (!values.email) {
                errors.email = 'Email required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Enter a valid email address';
            }

            /* Check valid password is entered */
            if (!values.password) {
                errors.password = 'Password required';
            } else if (values.password.length < 8) {
                errors.password = 'Minimum 8 characters';
            }

            return errors;
        },
    });

    /* Display data entry card */
    const clearForm = () => {
        setShow(true);
    }

    return (
        show ? (
            <>
                <Card>

                    {/* Styling header background color */}
                    <Card.Header style={{backgroundColor: "LightBlue"}}>
                        Create Account
                    </Card.Header>

                    <Card.Body>

                        {/* Build up Formik form using Bootstrap */}
                        <form onSubmit={formik.handleSubmit}>

                            {/* Name input */}
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input className="form-control" type="text" id="name" name="name" onChange={formik.handleChange} placeholder="Enter name" value={formik.values.name} />
                                <div className="form-text" id="nameError" style={{color: "red"}}>
                                    {formik.errors.name}
                                </div>
                            </div>

                            {/* Email input */}
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input className="form-control" type="email" id="email" name="email" onChange={formik.handleChange} placeholder="Enter email" value={formik.values.email} />
                                <div className="form-text" id="emailError" style={{color: "red"}}>
                                    {formik.errors.email}
                                </div>
                            </div>

                            {/* Password input */}
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input className="form-control" type="password" id="password" name="password" onChange={formik.handleChange} placeholder="Enter password" value={formik.values.password} />
                                <div className="form-text" id="passwordError" style={{color: "red"}}>
                                    {formik.errors.password}
                                </div>
                            </div>

                            {/* Create Account button */}
                            <button className="btn btn-secondary" disabled={!(formik.dirty && formik.isValid)} id="submit" type="submit">
                                Create Account
                            </button>

                        </form>

                    </Card.Body>

                </Card>
            </>
        ):(
            <>
                <Card>

                    {/* Styling header background color */}
                    <Card.Header style={{backgroundColor: "LightBlue"}}>
                        Create Account
                    </Card.Header>

                    <Card.Body>

                        {/* Success message */}
                        <Card.Text>
                            <b>Success</b>
                        </Card.Text>

                        {/* Message details */}
						<Card.Text>
                            Account {userName} created.
                        </Card.Text>

                        {/* Create Another Account button */}
                        <button className="btn btn-secondary" onClick={clearForm} type="button">
                            Add Another Account
                        </button>

                    </Card.Body>
                </Card>
            </>
        )
    );
};

export default CreateAccount;