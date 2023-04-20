/* The navigation bar at the top of the page is built using Bootstrap,
   and with its tooltip functionality coming from React-Bootstrap. */

import {NavLink, Outlet} from 'react-router-dom';

/* Importing tooltip overlay functionality */
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

/* Adding navigation bar styling */
import './NavBar.css';

const NavBar = () => {

    /* future plan to collapse into single function */
    const renderApertaBankTooltip = (props) => (
        <Tooltip id="link-tooltip" {...props}>
            Go to Home
        </Tooltip>
    );
    const renderCreateAccountTooltip = (props) => (
        <Tooltip id="link-tooltip" {...props}>
            Open Account
        </Tooltip>
    );
    const renderDepositTooltip = (props) => (
        <Tooltip id="link-tooltip" {...props}>
            Make a Deposit
        </Tooltip>
    );
    const renderWithdrawTooltip = (props) => (
        <Tooltip id="link-tooltip" {...props}>
            Withdraw Funds
        </Tooltip>
    );
    const renderAllDataTooltip = (props) => (
        <Tooltip id="link-tooltip" {...props}>
            View All Data
        </Tooltip>
    );

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light navbar-nav bg-light">

                {/* Manages tooltip overlay funtionality */}
                <OverlayTrigger placement="bottom" overlay={renderApertaBankTooltip}>
                    <NavLink className="navbar-brand" to="/">
                        Aperta Bank
                    </NavLink>
                </OverlayTrigger>

                {/* Button visible depending on screen width */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>

                {/* Building up collapsible bar of links with tooltip functionality */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        {/* Create Account link */}
                        <li className="nav-item">
                            <OverlayTrigger placement="bottom" overlay={renderCreateAccountTooltip}>
                                <NavLink className="nav-link" to="/CreateAccount">
                                    Create Account
                                </NavLink>
                            </OverlayTrigger>
                        </li>

                        {/* Deposit link */}
                        <li className="nav-item">
                            <OverlayTrigger placement="bottom" overlay={renderDepositTooltip}>
                                <NavLink className="nav-link" to="/Deposit">
                                    Deposit
                                </NavLink>
                            </OverlayTrigger>
                        </li>

                        {/* Withdraw link */}
                        <li className="nav-item">
                            <OverlayTrigger placement="bottom" overlay={renderWithdrawTooltip}>
                                <NavLink className="nav-link" to="/Withdraw">
                                    Withdraw
                                </NavLink>
                            </OverlayTrigger>
                        </li>

                        {/* All Data link */}
                        <li className="nav-item">
                            <OverlayTrigger placement="bottom" overlay={renderAllDataTooltip}>
                                <NavLink className="nav-link" to="/AllData">
                                    All Data
                                </NavLink>
                            </OverlayTrigger>
                        </li>

                    </ul>
                </div>

            </nav>

            <Outlet />
        </>
    );
};

export default NavBar;