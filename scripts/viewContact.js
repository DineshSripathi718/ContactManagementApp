import { getContactById, updateExistingContact, deleteContact } from "./data.js";


import { GET_CONTACT_BY_ID, UPDATE_CONTACT, DELETE_CONTACT } from "./DatabaseOPs/DatabaseOps.js";


const mainSection = document.querySelector('main');



const viewContactCard = async () => {
    console.log("view contact card called")
    const searchId = Number(window.location.search.substring(4));
    
    const contact = await GET_CONTACT_BY_ID(searchId)


    const htmlStructure = 
    `<div class="view-contact-container">
        <div class="image-container">
            <img src=${contact.photoUrl} alt="Contact Image">
        </div>
        <div class="contact-name">${contact.firstName+" "+contact.lastName}</div>
        <div class="contact-email">
            ${contact.email}
        </div>
        <div class="contact-phone">
            ${contact.phone}
        </div>

        <div class="tags-container">
            ${
                contact.tags.split(",").map(tag => `<div class="tag">${tag}</div>`).join("")
            }
        </div>

        <div class="button-container">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
            <button class="back-btn" onclick="window.location.href='./index.html'">Back</button>
        </div>
    </div>`

    const formStructure =  
    `<div class="view-contact-container">
        <div class="image-container">
            <img src=${contact.photoUrl} alt="Contact Image">
        </div>

        <div class="contact-name">
            <div class="input-group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" value=${contact.firstName} />
            </div>
            <div class="input-group">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" value=${contact.lastName} />
            </div>
        </div>

        <div class="input-group contact-email">
            <label for="email">Email</label>
            <input type="email" id="email" value=${contact.email} />
        </div>

        <div class="input-group contact-phone">
            <label for="phone">Phone</label>
            <input type="tel" id="phone" value=${contact.phone} />
        </div>

        <div class="input-group tags-container">
            <label for="tags">Tags</label>
            <input type="text" id="tags" value='${contact.tags}' />
        </div>

        <div class="button-container">
            <button class="Save-btn">Save</button>
            <button class="back-btn" onclick="window.history.back()">Back</button>
        </div>
    </div>
    `

    mainSection.innerHTML = htmlStructure

    const editButton = document.querySelector('.edit-btn');

    editButton.addEventListener('click', () => {
        mainSection.innerHTML = formStructure;

        const saveBtn = document.querySelector('.Save-btn');

    
        saveBtn.addEventListener('click',() => {
            saveContact(contact)
        })
    })

    const deleteButton = document.querySelector('.delete-btn');
    deleteButton.addEventListener('click', async () => {
        if(await DELETE_CONTACT(searchId))
            window.location.href = "./index.html"
        else
            console.error("unable to delete")
    })
}

viewContactCard();


const saveContact = async (contact) => {
    console.log(contact)
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const email = document.getElementById('email').value.trim()
    const phone = document.getElementById('phone').value.trim()
    const tags = document.getElementById('tags').value.trim()

    const id = contact.userId;
    const photo = contact.photoUrl

    const data = {userId : id,firstName, lastName, email, phone, tags, photoUrl : photo}

    console.log(data)
    contact = data;

    const response = await UPDATE_CONTACT(data)

    if(response)
        viewContactCard()
}



