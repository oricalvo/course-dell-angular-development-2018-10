const {store} = require("./store");
const {loadContacts, addContact} = require("./actions");

store.subscribe(function() {
    console.log("CHANGED", store.getState());
});

store.dispatch(loadContacts());

// store.dispatch(addContact({id:3, name: "Udi"}));
