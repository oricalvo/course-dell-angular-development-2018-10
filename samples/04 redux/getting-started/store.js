const {createStore, applyMiddleware} = require("redux");
const {combine} = require("./helpers");
const thunk = require('redux-thunk').default;

const initialState = {
    counter: 0,
    actions: 0,
};

function reducer(state, action) {
    // console.log("ACTION", action.type, state);

    if(action.type == "INC") {
        return combine({
            counter: inc,
            actions: updateActions,
        }, state, action);
    }

    return state;
}

function updateActions(actions) {
    // throw new Error("Ooops");

    return actions + 1;
}

function inc(counter, action) {
    return counter + 1;
}

const errorHandler = store => next => async action => {
    console.log("ACTION", action.type);

    try {
        await next(action);
    }
    catch(err) {
        console.log("ERROR", err.message);
    }
}

const store = createStore(reducer,
                    initialState,
                    applyMiddleware(errorHandler, thunk));

module.exports = {
    store,
}