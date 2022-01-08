import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Trades from './Trades';
import Budget from './Budget'
import History from "./history/history";
import HistoryBudget from "./history/HistoryBudget";

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div style={{ fontSize: '20px' }}>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/budget">Budget</Nav.Link>
                                <Nav.Link as={Link} to="/history-budget">Balance</Nav.Link>
                                <Nav.Link as={Link} to="/trades">Trades</Nav.Link>
                                <Nav.Link as={Link} to="/history-shares">Shares</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/budget">
                            <Budget />
                        </Route>
                        <Route path="/trades">
                            <Trades />
                        </Route>
                        <Route path="/history-budget">
                            <HistoryBudget />
                        </Route>
                        <Route path="/history-shares">
                            <History />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
