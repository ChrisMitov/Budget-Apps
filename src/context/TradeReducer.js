export default (state, action) => {
    switch (action.type) {
        case "ADD_TRADE":
            return {
                ...state,
                buyTrades: [action.payload, ...state.buyTrades]
            };
        case "SELL_TRADE":
            return {
                ...state,
                sellTrades: [action.payload, ...state.sellTrades]
            };
        case "DELETE_TRADE":
            return {
                ...state,
                buyTrades: state.buyTrades.filter(
                    buyTrade => buyTrade.id !== action.payload
                ),
                sellTrades: state.sellTrades.filter(
                    sellTrade => sellTrade.id !== action.payload
                ),
            };

        default:
            return state;
    }
};
