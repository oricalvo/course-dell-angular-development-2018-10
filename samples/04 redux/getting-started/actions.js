const {delay} = require("./helpers");

function inc() {
    return async (dispatch)=> {
        await delay(1500);

        throw new Error("Ooops");

        dispatch({
            type: "INC"
        });
    };
}

function add(amount) {
    if(!amount) {
        throw new Error("amount is missing");
    }

    return {
        type: "ADD",
        amount,
    }
}

module.exports = {
    inc,
    add
};
