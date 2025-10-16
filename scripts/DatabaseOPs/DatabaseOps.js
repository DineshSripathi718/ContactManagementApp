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
        const response = await fetch('http://localhost:8080/submit', payload)
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
    const response = await fetch("http://localhost:8080/contact/all");
    const data = await response.json();
    return data
}