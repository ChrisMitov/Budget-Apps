import React, {useContext} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import {GlobalContext} from "../../context/GlobalState";

const columns = [
    {
        dataField: "incomeText",
        text: "Incomes",
        sort: true
    },
    {
        dataField: "incomeAmount",
        text: "Product Price in $"
    },
    {
        dataField: "date",
        text: "Date",
        formatter: (cell) => {
            return new Date(cell).toLocaleDateString("en-US")
        }
    }
];


const expenseColumns = [
    {
        dataField: "expenseText",
        text: "Incomes",
        sort: true
    },
    {
        dataField: "expenseAmount",
        text: "Product Price in $",
        sort: true
    },
    {
        dataField: "date",
        text: "Date",
        formatter: (cell) => {
            return new Date(cell).toLocaleDateString("en-US")
        },
        sort: true
    }
];

export default function BudgetComp() {
    const {incomeTransactions} = useContext(GlobalContext);
    const {expenseTransactions} = useContext(GlobalContext);

    const rowStyle = {backgroundColor: '#c8e6c9'};

    return (
        <div className="container">
            <div className="header">
                <h2>History of Incomes </h2>
            </div>
            <div className="App">
                <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={incomeTransactions}
                    columns={columns}
                    striped
                    hover
                    condensed
                    rowStyle={rowStyle}
                />
            </div>
            <div className="header">
                <h2>History of Expenses </h2>
            </div>
            <div className="App">
                <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={expenseTransactions}
                    columns={expenseColumns}
                    striped
                    hover
                    condensed
                    rowStyle={rowStyle}
                />
            </div>
        </div>
    );
}
