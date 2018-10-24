const {createStore, applyMiddleware} = require("redux");
const {reducer} = require("./reducers");
const thunk = require('redux-thunk').default;

const initialState = {
    contacts: null,
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

module.exports = {
    store
};
