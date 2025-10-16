import { getContactById, updateExistingContact, deleteContact } from "./data.js";



const mainSection = document.querySelector('main');



const viewContactCard = () => {
    const searchId = Number(window.location.search.substring(4));
    
    const contact = getContactById(searchId)[0]

    console.log(contact)

    const tagValue = contact.tags.join(",")

    console.log(tagValue)

    const htmlStructure = 
    `<div class="view-contact-container">
        <div class="image-container">
            <img src=${contact.photo} alt="Contact Image">
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
                contact.tags.map(tag => `<div class="tag">${tag}</div>`)
            }
        </div>

        <div class="button-container">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
            <button class="back-btn" onclick="window.history.back()">Back</button>
        </div>
    </div>`

    const formStructure =  
    `<div class="view-contact-container">
        <div class="image-container">
            <img src=${contact.photo} alt="Contact Image">
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
            <input type="text" id="tags" value=${tagValue} />
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
    deleteButton.addEventListener('click', () => {
        if(deleteContact(searchId))
            window.location.href = "./index.html"
        else
            console.error("unable to delete")
    })
}

viewContactCard();


const saveContact = (contact) => {
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const email = document.getElementById('email').value.trim()
    const phone = document.getElementById('phone').value.trim()
    const tags = document.getElementById('tags').value.split(",")

    const id = contact.id;
    const photo = contact.photo

    const data = {id,firstName, lastName, email, phone, tags, photo}

    contact = data;

    if(updateExistingContact(data))
        viewContactCard()
}



