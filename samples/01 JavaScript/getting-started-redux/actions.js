function loadContacts(contacts) {
    return (dispatch)=> {
        setTimeout(function() {
            const contacts = [
                {id:1, name: "Ori"},
                {id:2, name: "Roni"},
            ];

            dispatch(setContacts(contacts));
        }, 1500);
    }
}

function addContact(contact) {
    if(!contact) {
        throw new Error("contact parameter must be specified");
    }

    return {
        type: "ADD_CONTACT",
        contact,
    }
}

function setContacts(contacts) {
    return {
        type: "SET_CONTACTS",
        contacts,
    }
}

module.exports = {
    loadContacts: loadContacts,
    addContact
};
