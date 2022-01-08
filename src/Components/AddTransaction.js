import React, {useState, useContext} from "react";
import {v4 as uuidv4} from "uuid";
import {GlobalContext} from "../context/GlobalState";

const AddTransaction = () => {
    const {addIncome, addExpense} = useContext(GlobalContext);

    const [income, setIncome] = useState({
        incomeText: "",
        incomeAmount: 0,
    });
    const [enteredDate, setEnteredDate] = useState(new Date().toISOString().replace(/T.*/, '').split('-').join('-'));
    const [expenseDate, setExpenseDate] = useState(new Date().toISOString().replace(/T.*/, '').split('-').join('-'));

    const {incomeText, incomeAmount} = income;

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

        if (incomeText !== "") {
            const newIncomeTransaction = {
                id: uuidv4(),
                incomeText,
                incomeAmount: incomeAmount * 1,
                date: new Date(enteredDate),
            };

            addIncome(newIncomeTransaction);

            setIncome({
                incomeText: "",
                incomeAmount: 0,
                date: new Date(enteredDate)
            });
        }
    };

    const [expense, setExpense] = useState({
        expenseText: "",
        expenseAmount: 0,
    });

    const {expenseText, expenseAmount} = expense;

    const onChangeExpense = (e) => {
        setExpense({...expense, [e.target.name]: e.target.value});
    };

    const onSubmitExpense = (e) => {
        e.preventDefault();

        if (expenseText !== "") {
            const newExpenseTransaction = {
                id: uuidv4(),
                expenseText,
                expenseAmount: expenseAmount * 1,
                date: new Date(enteredDate),
            };

            addExpense(newExpenseTransaction);

            setExpense({
                expenseText: "",
                expenseAmount: 0,
            });
        }
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome}>
                <div className="input-group income">
                    <input
                        type="text"
                        name="incomeText"
                        value={incomeText}
                        placeholder="Add Income..."
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
                    <input
                        type="text"
                        name="expenseText"
                        value={expenseText}
                        placeholder="Add Expense..."
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

export default AddTransaction;
