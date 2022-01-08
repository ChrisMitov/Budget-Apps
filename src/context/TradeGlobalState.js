import React, {createContext, useReducer, useEffect} from "react";
import TradeReducer from "./TradeReducer";

const initialState = {
    buyTrades:
        JSON.parse(localStorage.getItem("buyTrades")) || [],
    sellTrades:
        JSON.parse(localStorage.getItem("sellTrades")) || []
};

export const TradeContext = createContext(initialState);

export const TradeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(TradeReducer, initialState);

    useEffect(() => {
        localStorage.setItem(
            "buyTrades",
            JSON.stringify(state.buyTrades)
        );
        localStorage.setItem(
            "sellTrades",
            JSON.stringify(state.sellTrades)
        );
    });

    const deleteTrade = id => {
        dispatch({
            type: "DELETE_TRADE",
            payload: id
        });
    };

    const addTrade = buyTrade => {
        dispatch({
            type: "ADD_TRADE",
            payload: buyTrade
        });
    };

    const sellTrade = sellTrades => {
        dispatch({
            type: "SELL_TRADE",
            payload: sellTrades
        });
    };

    return (
        <TradeContext.Provider
            value={{
                buyTrades: state.buyTrades,
                sellTrades: state.sellTrades,
                deleteTrade,
                addTrade,
                sellTrade
            }}
        >
            {children}
        </TradeContext.Provider>
    );
};
