function combine(funcs, state, action) {
    const newState = {
        ...state,
    }

    for(const key in funcs) {
        newState[key] = funcs[key](state[key], action);
    }

    return newState;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
    combine,
    delay,
};
