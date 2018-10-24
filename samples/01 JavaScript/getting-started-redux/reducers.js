function reducer(state, action) {
    console.log("REDUCER", action.type);

    if(action.type == "SET_CONTACTS") {
        return setContacts(state, action.contacts);
    }
    else if(action.type == "ADD_CONTACT") {
        return addContact(state, action.contact);
    }

    return state;
}

function setContacts(state, contacts) {
    return {
        ...state,
        contacts,
    }
}

function addContact(state, contact) {
    const contacts = state.contacts.slice();
    contacts.push(contact);
    return {
        ...state,
        contacts,
    }
}

module.exports = {
    reducer,
};
