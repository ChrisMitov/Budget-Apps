import React, {Component} from 'react'
import {GlobalContextProvider} from "../context/GlobalState";
import Header from "./Header";
import Balance from "./Balance";
import AddTransaction from "./AddTransaction";

export default class Home extends Component {
    render() {
        return (
            <GlobalContextProvider>
                <div className="container1">
                    <div className="app-wrapper">
                        <Header/>
                        <Balance/>
                        <AddTransaction/>
                    </div>
                </div>
            </GlobalContextProvider>
        )
    }
}
