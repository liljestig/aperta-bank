/* The withdraw form was created using Bootstrap and Formik,
   and allows the user to withdraw an amount from an account */

import {useFormik} from 'formik';
import {useState, useContext} from 'react';

/* Import UserContext from App.js */
import {UserContext} from '../App.js';

/* Import Card from React-Bootstrap */
import Card from 'react-bootstrap/Card';

/* Adding card styling */
import './Card.css';

const Withdraw = () => {

    /* Create local objects */
    const [show, setShow] = useState(true);
    const [withdrawAmount, setWithdrawAmount] = useState('');
    const [overdraft, setOverdraft] = useState(false);

    /* Store user context object */
    const ctx = useContext(UserContext);

    const formik = useFormik({
        initialValues: {
            withdrawAmount: '',
        },

        onSubmit: (values, {resetForm}) => {

            /* Update account balance */
            ctx.users[0].balance = Number(ctx.users[0].balance) - Number(formik.values.withdrawAmount);

            /* Update React withdrawAmount variable */
            setWithdrawAmount(formik.values.withdrawAmount);

            /* Hide data entry card */
            setShow(false);

            /* Clear form values */
            resetForm();
        },

        validate: (values) => {

            /* Initialize errors variable */
            let errors = {};

            /* Check valid amount is entered */
            if (!values.withdrawAmount) {
                errors.withdrawAmount = 'Amount required';                
            } else if (!/^[1-9][0-9]*$/i.test(values.withdrawAmount)) {
                errors.withdrawAmount = 'Enter amount without decimals greater than zero';
            }

            /* Check if amount exceeds balance */
            setOverdraft(Number(values.withdrawAmount) > Number(ctx.users[0].balance));

            return errors;

        },
    });

    /* Display data entry card */
    const clearForm = () => {
        setOverdraft(false);
        setShow(true);
    }

    return (
        show ? (
            <>
                <Card>

                    {/* Styling header background color */}
                    <Card.Header style={{backgroundColor: 'LightPink'}}>
                        Withdraw
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
                                <label className="form-label">Withdraw Amount</label>
                                <input className="form-control" type="number" id="withdrawAmount" name="withdrawAmount" onChange={formik.handleChange} placeholder="Withdraw Amount" value={formik.values.withdrawAmount} />
                                <div className="form-text" id="withdrawAmountError" style={{color: "red"}}>
                                    {formik.errors.withdrawAmount}
                                    {overdraft ? ("Overdraft alert"):null}
                                </div>
                            </div>

                            {/* Withdraw button */}
                            <button className="btn btn-secondary" disabled={!(formik.dirty && formik.isValid)} id="submit" type="submit">
                                Withdraw
                            </button>

                        </form>

                    </Card.Body>
                </Card>
            </>
        ):(
            <>
                <Card>

                    {/* Styling header background color */}
                    <Card.Header style={{backgroundColor: 'LightPink'}}>
                        Withdraw
                    </Card.Header>

                    <Card.Body>

                        {/* Success message */}
						<Card.Text>
                            <b>Success</b>
                        </Card.Text>

                        {/* Message details */}
						<Card.Text>
                            Withdraw of ${withdrawAmount} processed.<br />
                            New balance ${ctx.users[0].balance}.
                        </Card.Text>

                        {/* Make Another Withdraw button */}
                        <button className="btn btn-secondary" onClick={clearForm} type="button">
                            Make Another Withdraw
                        </button>

                    </Card.Body>
                </Card>
            </>
        )
    );
};

export default Withdraw;