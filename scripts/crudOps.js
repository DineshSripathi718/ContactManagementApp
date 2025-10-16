import contacts from "./data.js";


//fetches all the contacts
export const fetchAllContacts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(contacts)
        }, 1000);
    });
}

export const filterContactsFromData = (searchText) => {
    const filteredContacts = contacts.filter(contact => contact.firstName.toLowerCase().includes(searchText) || contact.lastName.toLowerCase().includes(searchText))


    return filteredContacts
}