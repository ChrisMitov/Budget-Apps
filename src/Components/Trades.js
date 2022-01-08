import React, {Component} from 'react'
import TradesHeader from "./trades/TradesHeader";
import {TradeContextProvider} from "../context/TradeGlobalState";
import TradesBalance from "./trades/TradesBalance";
import AddTrade from "./trades/AddTrade";

export default class Trades extends Component {
    render() {
        return (
            <TradeContextProvider>
                <div className="container1">
                    <div className="app-wrapper">
                        <TradesHeader/>
                        <TradesBalance/>
                        <AddTrade/>
                    </div>
                </div>
            </TradeContextProvider>
        );
    }
}
