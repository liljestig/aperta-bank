/* The deposit form was created using Bootstrap and Formik,
   and allows the user to deposit an amount into an account */

import {useFormik} from 'formik';
import {useState, useContext} from 'react';

/* Import UserContext from App.js */
import {UserContext} from '../App.js';

/* Import Card from React-Bootstrap */
import Card from 'react-bootstrap/Card';

/* Adding card styling */
import './Card.css';

const Deposit = () => {

    /* Create local objects */
    const [show, setShow] = useState(true);
    const [depositAmount, setDepositAmount] = useState('');

    /* Store user context object */
    const ctx = useContext(UserContext);

    /* Initialize Formik */
    const formik = useFormik({

        initialValues: {
            depositAmount: '',
        },

        onSubmit: (values, {resetForm}) => {

            /* Update account balance */
            ctx.users[0].balance = Number(ctx.users[0].balance) + Number(formik.values.depositAmount);

            /* Update React depositAmount variable */
            setDepositAmount(formik.values.depositAmount);

            /* Hide data entry card */
            setShow(false);

            /* Clear form values */
            resetForm();
        },

        validate: (values) => {

            /* Initialize errors variable */
            let errors = {};

            /* Check valid amount is entered */
            if (!values.depositAmount) {
                errors.depositAmount = 'Amount required';
            } else if (!/^[1-9][0-9]*$/i.test(values.depositAmount)) {
                errors.depositAmount = 'Enter amount without decimals greater than zero';
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
                    <Card.Header style={{backgroundColor: "LightGreen"}}>
                        Deposit
                    </Card.Header>

                    <Card.Body>

                        {/* Add some spaces between text and number */}
						<Card.Text>
						    Balance&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;${ctx.users[0].balance}
                        </Card.Text>

                        {/* Build up Formik form using Bootstrap */}
                        <form  onSubmit={formik.handleSubmit}>

                            {/* Amount input */}
                            <div className="mb-3">
                                <label className="form-label">Deposit Amount</label>
                                <input className="form-control" type="number" id="depositAmount" name="depositAmount" onChange={formik.handleChange} placeholder="Deposit Amount" value={formik.values.depositAmount} />
                                <div className="form-text" id="depositAmountError" style={{color: "red"}}>
                                    {formik.errors.depositAmount}
                                </div>
                            </div>

                            {/* Deposit button */}
                            <button className="btn btn-secondary" disabled={!(formik.dirty && formik.isValid)} id="submit" type="submit">
                                Deposit
                            </button>

                        </form>

                    </Card.Body>
                </Card>
            </>
        ):(
            <>
                <Card>

                    {/* Styling header background color */}
                    <Card.Header style={{backgroundColor: "LightGreen"}}>
                        Deposit
                    </Card.Header>

                    <Card.Body>

                        {/* Success message */}
						<Card.Text>
                            <b>Success</b>
						</Card.Text>

                        {/* Message details */}
						<Card.Text>
                            Deposit of ${depositAmount} received.<br />
                            New balance ${ctx.users[0].balance}.
						</Card.Text>

                        {/* Make Another Deposit button */}
                        <button className="btn btn-secondary" onClick={clearForm} type="button">
                            Make Another Deposit
                        </button>

                    </Card.Body>
                </Card>
            </>
        )
    );
};

export default Deposit;