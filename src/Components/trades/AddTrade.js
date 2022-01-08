import React, {useState, useContext} from "react";
import {v4 as uuidv4} from "uuid";
import {TradeContext} from "../../context/TradeGlobalState";

const AddTrade = () => {
    const {addTrade, sellTrade} = useContext(TradeContext);

    const [income, setIncome] = useState({
        company: "",
    });
    const [enteredDate, setEnteredDate] = useState(new Date().toISOString().replace(/T.*/, '').split('-').join('-'));
    const [expenseDate, setExpenseDate] = useState(new Date().toISOString().replace(/T.*/, '').split('-').join('-'));

    const {company, shares, incomeAmount} = income;

    const onChangeIncome = (e) => {
        setIncome({...income, [e.target.name]: e.target.value});
    };

    const dateChangeHandler = (evt) => {
        setEnteredDate(evt.target.value);
    };

    const expenseDateChangeHandler = (evt) => {
        setExpenseDate(evt.target.value);
    };

    const onSubmitIncome = (e) => {
        e.preventDefault();

        if (company !== "") {
            const newTrade = {
                id: uuidv4(),
                company,
                shares,
                incomeAmount: incomeAmount * 1,
                date: new Date(enteredDate),
            };

            addTrade(newTrade);

            setIncome({
                company: "",
                shares: 0,
                incomeAmount: 0,
                date: new Date(enteredDate)
            });
        }
    };

    const [expense, setExpense] = useState({
        expenseCompany: "",
    });

    const {expenseCompany, expenseShares, expenseAmount} = expense;

    const onChangeExpense = (e) => {
        setExpense({...expense, [e.target.name]: e.target.value});
    };

    const onSubmitExpense = (e) => {
        e.preventDefault();

        if (expenseCompany !== "") {
            const newExpenseTransaction = {
                id: uuidv4(),
                expenseCompany,
                expenseShares: expenseShares,
                expenseAmount: expenseAmount,
                date: new Date(enteredDate),
            };

            sellTrade(newExpenseTransaction);

            setExpense({
                expenseCompany: "",
                expenseShares: 0,
                expenseAmount: 0,
                date: new Date(expenseDate)
            });
        }
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome}>
                <div className="input-group income">
                    <h3>Buy Trade</h3>
                    <input
                        type="text"
                        name="company"
                        value={company}
                        placeholder="Add company..."
                        autoComplete="off"
                        onChange={onChangeIncome}
                    />
                    <input
                        type="number"
                        name="shares"
                        value={shares}
                        placeholder="How many shares?"
                        autoComplete="off"
                        onChange={onChangeIncome}
                    />
                    <input
                        type="number"
                        name="incomeAmount"
                        value={incomeAmount}
                        placeholder="Amount"
                        autoComplete="off"
                        onChange={onChangeIncome}
                    />
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31"
                           onChange={dateChangeHandler}/>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            <form onSubmit={onSubmitExpense}>
                <div className="input-group expense">
                    <h3>Sell Trade</h3>
                    <input
                        type="text"
                        name="expenseCompany"
                        value={expenseCompany}
                        placeholder="Add company..."
                        autoComplete="off"
                        onChange={onChangeExpense}
                    />
                    <input
                        type="text"
                        name="expenseShares"
                        value={expenseShares}
                        placeholder="How many shares?"
                        autoComplete="off"
                        onChange={onChangeExpense}
                    />
                    <input
                        type="number"
                        name="expenseAmount"
                        value={expenseAmount}
                        placeholder="Amount"
                        autoComplete="off"
                        onChange={onChangeExpense}
                    />
                    <input type="date" value={expenseDate} min="2019-01-01" max="2022-12-31"
                           onChange={expenseDateChangeHandler}/>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    );
};

export default AddTrade;
