import showContacts from "./ContactsForm.js";

import { GET_ALL_CONTACTS } from "./DatabaseOPs/DatabaseOps.js";

let contactsData = null

async function fetchContacts(){
    // const data = await fetchAllContacts();
    const data = await GET_ALL_CONTACTS();

    contactsData = data

    showContacts(contactsData)
    
    const ctaButtons = document.querySelectorAll('.cta');

    ctaButtons.forEach(btn => {
        btn.addEventListener('click',() => {
            btn.href = "/viewContact.html?id="+btn.getAttribute('contact-id')
        });
    })

}

fetchContacts()

const AddNewContactButton = document.getElementById('addNewContact');

AddNewContactButton.addEventListener('click', () => {
    window.location.href = "./AddContact.html"
})

const searchForm = document.getElementById('searchbyname');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchText = document.getElementById('searchText').value.trim().toLowerCase()
    const filteredContacts = filterContactsFromData(searchText)
    showContacts(filteredContacts)
})


const searchTextBox = document.getElementById('searchText');

searchTextBox.addEventListener('input', (e) => {
    const searchText = e.target.value.trim();

    if (searchText) {
        const filteredContacts = filterContactsFromData(searchText);
        showContacts(filteredContacts);
    } else {
        fetchContacts();
    }
});

const filterContactsFromData = (searchText) => {
const filteredContacts = contactsData.filter(contact => contact.firstName.toLowerCase().includes(searchText) || contact.lastName.toLowerCase().includes(searchText))


return filteredContacts
}