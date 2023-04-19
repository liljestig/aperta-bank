/* This code maps user names, email addresses, passwords, and balances
   and displays data in a table showed on a card both using Bootstrap */

import {useContext} from 'react';

/* Import UserContext from App.js */
import {UserContext} from '../App.js';

/* Import Card and Table from React-Bootstrap */
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

/* Adding card styling */
import './Card.css';

const AllData = () => {

    /* Store user context object */
    const ctx = useContext(UserContext);

    return (
        <>
            {/* Styling table width to accommodate columns */}
            <Card style={{width: '36em'}}>

                {/* Styling header background color */}
                <Card.Header style={{backgroundColor: "LightGray"}}>
                    All Data
                </Card.Header>

                <Card.Body>

                    {/* Expanding table width to 100% */}
                    <Table style={{width: "100%"}}>

                        <thead>
                            <tr>

                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>

                                {/* Styling number column alignment to right */}
                                <th scope="col" style={{textAlign: "right"}}>Balance</th>

                            </tr>
                        </thead>

                        <tbody>

                            {/* Mapping user context object */}
                            {ctx.users.map((user, index) => (

                                <tr key={index}>

                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>

                                    {/* Styling number column alignment to right */}
                                    <td style={{textAlign: "right"}}>${user.balance}</td>

                                </tr>
                            ))}

                        </tbody>

                    </Table>

                </Card.Body>
            </Card>
        </>
    );
};

export default AllData;