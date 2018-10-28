const {store} = require("./store");
const {inc, add}  = require("./actions");

main();

async function main() {
    store.subscribe(function() {
        console.log("CHANGE", store.getState());
    });

    await store.dispatch(inc());
}


