import createContactCard from "./ContactCard.js";

const CONTACTS_CONTAINER = document.querySelector('.contacts-container');

const showContacts = (contacts) => {
    CONTACTS_CONTAINER.innerHTML = "";
    contacts.forEach(contact => {
        
        const ContactCard = createContactCard(contact)
        CONTACTS_CONTAINER.insertAdjacentHTML("beforeend", ContactCard)
    })
}

export default showContacts