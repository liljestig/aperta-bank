/* React is a user interface library based on JavaScript that is widely used in frontend web development.
   The App.js contains the main logic of the application rendered onto the div "root" tag of index.html.
   It mounts additional components such as NavBar, Home, CreateAccount, Deposit, Withdraw, and AllData. */

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {createContext} from 'react';

/* Mounting components */
import NavBar from './components/NavBar.js'
import Home from './components/Home.js';
import CreateAccount from './components/CreateAccount.js';
import Deposit from './components/Deposit.js';
import Withdraw from './components/Withdraw.js';
import AllData from './components/AllData.js';

/* Adding default styling */
import './App.css';

/* User context object */
export const UserContext = createContext(null);

function App() {

    return (
        <div className="App" style={{backgroundImage: "url(/vault.jpg)", height: '100vh'}}>
            <BrowserRouter>

                {/* Loading navigation bar component */}
                <NavBar />

                {/* Build up router's paths/routes */}
                <UserContext.Provider value={{users:[{name:'dan',email:'dan@liljestig.com',password:'T0p$3cret',balance:100}]}}>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/CreateAccount" element={<CreateAccount />} />
                        <Route exact path="/Deposit" element={<Deposit />} />
                        <Route exact path="/Withdraw" element={<Withdraw />} />
                        <Route exact path="/AllData" element={<AllData />} />
                    </Routes>
                </UserContext.Provider>

            </BrowserRouter>
        </div>
    );
}

export default App;
