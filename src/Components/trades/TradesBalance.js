import React, { useContext } from "react";
import {TradeContext} from "../../context/TradeGlobalState";

const TradesBalance = () => {
    const { buyTrades, sellTrades } = useContext(TradeContext);

    const incomeAmounts = buyTrades.map(
        buyTrade => buyTrade.incomeAmount * buyTrade.shares
    );

    const expenseAmounts = sellTrades.map(
        sellTrade => sellTrade.expenseAmount * sellTrade.shares
    );

    const totalIncome = expenseAmounts
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const totalExpenses = incomeAmounts
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    return (
        <div className="balance">
            <h2>Your Trade Balance</h2>
            <h3>${(totalIncome - totalExpenses).toFixed(2)}</h3>
            <div className="income-expense">
                <div className="plus">
                    <h3>Income</h3>
                    <p>+${totalIncome}</p>
                </div>
                <div className="minus">
                    <h3>Expenses</h3>
                    <p>-${totalExpenses}</p>
                </div>
            </div>
        </div>
    );
};

export default TradesBalance;
