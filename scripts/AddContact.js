// import { addNewContact } from "./data.js";

import { ADD_CONTACT } from "./DatabaseOPs/DatabaseOps.js";

const contactForm = document.getElementById('addContactForm');
const popUp = document.getElementById('pop-up');
const messageContainer = document.getElementById('pop-message');
const popUpClose = document.getElementById('pop-up-close');

// Close popup event (added once)
popUpClose.addEventListener('click', () => {
    popUp.classList.remove('active');
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        company: document.getElementById('company').value.trim(),
        tags: document.getElementById('tags').value.trim(),
        photoUrl: document.getElementById('photo').value.trim()
    };

    validateForm(data);
});

function validateForm(data) {
    if (!validateData(data.email, "email")) {
        displayPopUpMessage("Enter a valid email address");
        console.log("invalid email")
        return;
    }

    if (!validateData(data.phone, "phone")) {
        displayPopUpMessage("Enter a valid phone number");
        console.log("invalid phone")
        return;
    }

    if (data.photo && !validateData(data.photo, "photo")) {
        displayPopUpMessage("Enter a valid photo URL (jpg, png, gif, webp)");
        console.log("invalid url")
        return;
    }

    // Add contact if validation passes
    // addNewContact(data);
    if(ADD_CONTACT(data))
        displayPopUpMessage("Contact added successfully");
    else
        displayPopUpMessage("Un-expected error please try again");

    // Optional: clear the form
    contactForm.reset();
}

function validateData(data, type) {
    switch (type) {
        case "email":
            const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return EMAIL_REGEX.test(data);

        case "phone":
            const PHONE_REGEX = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
            return PHONE_REGEX.test(data);

        case "photo":
            const PHOTO_REGEX = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
            return PHOTO_REGEX.test(data);

        default:
            return false;
    }
}

function displayPopUpMessage(message) {
    messageContainer.innerText = message;
    console.log(popUp.classList)
    popUp.classList.add('active');
}
