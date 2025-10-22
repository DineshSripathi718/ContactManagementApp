const URL = 'https://contactmanagementapp-backend.onrender.com/'
// const URL = 'http://localhost:8080/'

export const ADD_CONTACT = async (data) => {
    console.log(data);

    const payload = {
        headers : {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body : JSON.stringify(data)
    }

    try{
        const response = await fetch(`${URL}submit`, payload)
        if(response.ok){
            console.log("data submitted")
            return true
        }else{
            console.log("data not submitted")
            return false
        }
    }catch(error){
        console.log("unexpected error")
        console.error(error)
    }
}


export const GET_ALL_CONTACTS = async () => {
    const response = await fetch(`${URL}contact/all`);
    const data = await response.json();
    return data
}

export const GET_CONTACT_BY_ID = async (id) => {
    try{
        const response = await fetch(`${URL}contact/${id}`)
        if(response.ok){
            const data = await response.json()

            return data
        }else{
            throw new error("No contact found with ",id)
        }
    }catch(error){
        return "unexpected error please try again"
    }
}

export const UPDATE_CONTACT = async (data) => {
    console.log(data);

    const payload = {
        headers : {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body : JSON.stringify(data)
    }

    try{
        const response = await fetch(`${URL}contact/update`, payload)
        if(response.ok){
            const data = await response.text();
            console.log(data)
            return true;
        }else{
            console.log("data not updated")
            return false
        }
    }catch(error){
        console.log("unexpected error")
        console.error(error)
    }
}

export const DELETE_CONTACT = async (id) => {
    const payload = {
        headers : {
            'Content-Type': 'application/json'
        },
        method: 'DELETE'
    }
    const response = await fetch(`${URL}contact/delete/${id}`, payload)

    if(response.ok){
        return true
    }

    return false
}