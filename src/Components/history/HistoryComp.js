import React, {useContext} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import {TradeContext} from "../../context/TradeGlobalState";

const columns = [
    {
        dataField: "company",
        text: "Company Name",
        sort: true
    },
    {
        dataField: "shares",
        text: "Number of shares",
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


export default function HistoryComp() {
    const {buyTrades} = useContext(TradeContext);
    const {sellTrades} = useContext(TradeContext);
    const rowStyle = {backgroundColor: '#c8e6c9'};

    return (
        <div className="container">
            <div className="header">
                <h2>History of Buys </h2>
            </div>
            <div className="App">
                <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={buyTrades}
                    columns={columns}
                    striped
                    hover
                    condensed
                    rowStyle={rowStyle}
                />
            </div>
            <div className="header">
                <h2>History of Sells </h2>
            </div>
            <div className="App1">
                <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={sellTrades}
                    columns={columns}
                    striped
                    hover
                    condensed
                    rowStyle={rowStyle}
                />
            </div>
        </div>
    );
}
