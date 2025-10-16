// src/data/contacts.js

  let contacts = JSON.parse(localStorage.getItem('contacts')) || [
    { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com", phone: "+91-9000010001", company: "Acme Corp", tags: ["company","client"], photo: "https://i.pravatar.cc/150?img=1" },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", phone: "+91-9000010002", company: "Beta Ltd", tags: ["friends"], photo: "https://i.pravatar.cc/150?img=2" },
    { id: 3, firstName: "Robert", lastName: "Johnson", email: "robert.johnson@example.com", phone: "+91-9000010003", company: "Gamma Inc", tags: ["family"], photo: "https://i.pravatar.cc/150?img=3" },
    { id: 4, firstName: "Emily", lastName: "Davis", email: "emily.davis@example.com", phone: "+91-9000010004", company: "Delta LLC", tags: ["company"], photo: "https://i.pravatar.cc/150?img=4" },
    { id: 5, firstName: "Michael", lastName: "Brown", email: "michael.brown@example.com", phone: "+91-9000010005", company: "Epsilon Co", tags: ["client"], photo: "https://i.pravatar.cc/150?img=5" },
    { id: 6, firstName: "Sarah", lastName: "Miller", email: "sarah.miller@example.com", phone: "+91-9000010006", company: "Zeta Solutions", tags: ["friends","family"], photo: "https://i.pravatar.cc/150?img=6" },
    { id: 7, firstName: "David", lastName: "Wilson", email: "david.wilson@example.com", phone: "+91-9000010007", company: "Eta Tech", tags: ["company","client"], photo: "https://i.pravatar.cc/150?img=7" },
    { id: 8, firstName: "Linda", lastName: "Moore", email: "linda.moore@example.com", phone: "+91-9000010008", company: "Theta Corp", tags: ["friends"], photo: "https://i.pravatar.cc/150?img=8" },
    { id: 9, firstName: "James", lastName: "Taylor", email: "james.taylor@example.com", phone: "+91-9000010009", company: "Iota Ltd", tags: ["family"], photo: "https://i.pravatar.cc/150?img=9" },
    { id: 10, firstName: "Barbara", lastName: "Anderson", email: "barbara.anderson@example.com", phone: "+91-9000010010", company: "Kappa Inc", tags: ["client"], photo: "https://i.pravatar.cc/150?img=10" },
    { id: 11, firstName: "William", lastName: "Thomas", email: "william.thomas@example.com", phone: "+91-9000010011", company: "Lambda LLC", tags: ["company"], photo: "https://i.pravatar.cc/150?img=11" },
    { id: 12, firstName: "Patricia", lastName: "Jackson", email: "patricia.jackson@example.com", phone: "+91-9000010012", company: "Mu Co", tags: ["friends","client"], photo: "https://i.pravatar.cc/150?img=12" },
    { id: 13, firstName: "Charles", lastName: "White", email: "charles.white@example.com", phone: "+91-9000010013", company: "Nu Solutions", tags: ["family"], photo: "https://i.pravatar.cc/150?img=13" },
    { id: 14, firstName: "Jennifer", lastName: "Harris", email: "jennifer.harris@example.com", phone: "+91-9000010014", company: "Xi Tech", tags: ["company"], photo: "https://i.pravatar.cc/150?img=14" },
    { id: 15, firstName: "Joseph", lastName: "Martin", email: "joseph.martin@example.com", phone: "+91-9000010015", company: "Omicron Corp", tags: ["client"], photo: "https://i.pravatar.cc/150?img=15" },
    { id: 16, firstName: "Susan", lastName: "Thompson", email: "susan.thompson@example.com", phone: "+91-9000010016", company: "Pi Ltd", tags: ["friends"], photo: "https://i.pravatar.cc/150?img=16" },
    { id: 17, firstName: "Thomas", lastName: "Garcia", email: "thomas.garcia@example.com", phone: "+91-9000010017", company: "Rho Inc", tags: ["company","client"], photo: "https://i.pravatar.cc/150?img=17" },
    { id: 18, firstName: "Margaret", lastName: "Martinez", email: "margaret.martinez@example.com", phone: "+91-9000010018", company: "Sigma LLC", tags: ["family"], photo: "https://i.pravatar.cc/150?img=18" },
    { id: 19, firstName: "Christopher", lastName: "Robinson", email: "christopher.robinson@example.com", phone: "+91-9000010019", company: "Tau Co", tags: ["friends","client"], photo: "https://i.pravatar.cc/150?img=19" },
    { id: 20, firstName: "Dorothy", lastName: "Clark", email: "dorothy.clark@example.com", phone: "+91-9000010020", company: "Upsilon Solutions", tags: ["company"], photo: "https://i.pravatar.cc/150?img=20" },
    { id: 21, firstName: "Daniel", lastName: "Rodriguez", email: "daniel.rodriguez@example.com", phone: "+91-9000010021", company: "Phi Tech", tags: ["friends"], photo: "https://i.pravatar.cc/150?img=21" },
    { id: 22, firstName: "Nancy", lastName: "Lewis", email: "nancy.lewis@example.com", phone: "+91-9000010022", company: "Chi Corp", tags: ["client"], photo: "https://i.pravatar.cc/150?img=22" },
    { id: 23, firstName: "Matthew", lastName: "Lee", email: "matthew.lee@example.com", phone: "+91-9000010023", company: "Psi Ltd", tags: ["company"], photo: "https://i.pravatar.cc/150?img=23" },
    { id: 24, firstName: "Karen", lastName: "Walker", email: "karen.walker@example.com", phone: "+91-9000010024", company: "Omega Inc", tags: ["family"], photo: "https://i.pravatar.cc/150?img=24" },
    { id: 25, firstName: "Anthony", lastName: "Hall", email: "anthony.hall@example.com", phone: "+91-9000010025", company: "Alpha LLC", tags: ["client","friends"], photo: "https://i.pravatar.cc/150?img=25" },
    { id: 26, firstName: "Betty", lastName: "Allen", email: "betty.allen@example.com", phone: "+91-9000010026", company: "Beta Co", tags: ["company"], photo: "https://i.pravatar.cc/150?img=26" },
    { id: 27, firstName: "Mark", lastName: "Young", email: "mark.young@example.com", phone: "+91-9000010027", company: "Gamma Solutions", tags: ["family"], photo: "https://i.pravatar.cc/150?img=27" },
    { id: 28, firstName: "Sandra", lastName: "Hernandez", email: "sandra.hernandez@example.com", phone: "+91-9000010028", company: "Delta Tech", tags: ["friends"], photo: "https://i.pravatar.cc/150?img=28" },
    { id: 29, firstName: "Donald", lastName: "King", email: "donald.king@example.com", phone: "+91-9000010029", company: "Epsilon Corp", tags: ["company","client"], photo: "https://i.pravatar.cc/150?img=29" },
    { id: 30, firstName: "Ashley", lastName: "Wright", email: "ashley.wright@example.com", phone: "+91-9000010030", company: "Zeta Ltd", tags: ["family"], photo: "https://i.pravatar.cc/150?img=30" },
    { id: 31, firstName: "Steven", lastName: "Lopez", email: "steven.lopez@example.com", phone: "+91-9000010031", company: "Eta Inc", tags: ["company"], photo: "https://i.pravatar.cc/150?img=31" },
    { id: 32, firstName: "Kimberly", lastName: "Hill", email: "kimberly.hill@example.com", phone: "+91-9000010032", company: "Theta LLC", tags: ["friends","client"], photo: "https://i.pravatar.cc/150?img=32" },
    { id: 33, firstName: "Paul", lastName: "Scott", email: "paul.scott@example.com", phone: "+91-9000010033", company: "Iota Co", tags: ["company"], photo: "https://i.pravatar.cc/150?img=33" },
    { id: 34, firstName: "Donna", lastName: "Green", email: "donna.green@example.com", phone: "+91-9000010034", company: "Kappa Solutions", tags: ["family"], photo: "https://i.pravatar.cc/150?img=34" },
    { id: 35, firstName: "George", lastName: "Adams", email: "george.adams@example.com", phone: "+91-9000010035", company: "Lambda Tech", tags: ["client"], photo: "https://i.pravatar.cc/150?img=35" },
    { id: 36, firstName: "Emily", lastName: "Baker", email: "emily.baker@example.com", phone: "+91-9000010036", company: "Mu Corp", tags: ["friends"], photo: "https://i.pravatar.cc/150?img=36" },
    { id: 37, firstName: "Kenneth", lastName: "Gonzalez", email: "kenneth.gonzalez@example.com", phone: "+91-9000010037", company: "Nu Ltd", tags: ["company","client"], photo: "https://i.pravatar.cc/150?img=37" },
    { id: 38, firstName: "Rebecca", lastName: "Nelson", email: "rebecca.nelson@example.com", phone: "+91-9000010038", company: "Xi Inc", tags: ["family"], photo: "https://i.pravatar.cc/150?img=38" },
    { id: 39, firstName: "Brian", lastName: "Carter", email: "brian.carter@example.com", phone: "+91-9000010039", company: "Omicron LLC", tags: ["friends","client"], photo: "https://i.pravatar.cc/150?img=39" },
    { id: 40, firstName: "Laura", lastName: "Mitchell", email: "laura.mitchell@example.com", phone: "+91-9000010040", company: "Pi Co", tags: ["company"], photo: "https://i.pravatar.cc/150?img=40" },
    { id: 41, firstName: "Edward", lastName: "Perez", email: "edward.perez@example.com", phone: "+91-9000010041", company: "Rho Solutions", tags: ["family"], photo: "https://i.pravatar.cc/150?img=41" },
    { id: 42, firstName: "Sharon", lastName: "Roberts", email: "sharon.roberts@example.com", phone: "+91-9000010042", company: "Sigma Tech", tags: ["client"], photo: "https://i.pravatar.cc/150?img=42" },
    { id: 43, firstName: "Joshua", lastName: "Turner", email: "joshua.turner@example.com", phone: "+91-9000010043", company: "Tau Corp", tags: ["company","friends"], photo: "https://i.pravatar.cc/150?img=43" },
    { id: 44, firstName: "Cynthia", lastName: "Phillips", email: "cynthia.phillips@example.com", phone: "+91-9000010044", company: "Upsilon Ltd", tags: ["family"], photo: "https://i.pravatar.cc/150?img=44" },
    { id: 45, firstName: "Ryan", lastName: "Campbell", email: "ryan.campbell@example.com", phone: "+91-9000010045", company: "Phi Inc", tags: ["client"], photo: "https://i.pravatar.cc/150?img=45" },
    { id: 46, firstName: "Angela", lastName: "Parker", email: "angela.parker@example.com", phone: "+91-9000010046", company: "Chi LLC", tags: ["company"], photo: "https://i.pravatar.cc/150?img=46" },
    { id: 47, firstName: "Jacob", lastName: "Evans", email: "jacob.evans@example.com", phone: "+91-9000010047", company: "Psi Co", tags: ["friends"], photo: "https://i.pravatar.cc/150?img=47" },
    { id: 48, firstName: "Melissa", lastName: "Edwards", email: "melissa.edwards@example.com", phone: "+91-9000010048", company: "Omega Solutions", tags: ["family"], photo: "https://i.pravatar.cc/150?img=48" },
    { id: 49, firstName: "Gary", lastName: "Collins", email: "gary.collins@example.com", phone: "+91-9001010048", company: "Beta Solutions", tags: ["family", "friend", "office"], photo: "https://i.pravatar.cc/150?img=49"}
]

export const addNewContact = (contactDetails) => {
    const id = contacts[contacts.length - 1].id + 1;
    contactDetails = {id, ...contactDetails}
    const updatedContacts = [...contacts, contactDetails]
    console.log(updatedContacts)
    localStorage.setItem('contacts', JSON.stringify(updatedContacts))
}

export const getContactById = (id) => {
  return contacts.filter(contact => contact.id === id)
}

export const updateExistingContact = (contact) => {
    let updateContacts = contacts.filter(c => c.id != contact.id)

    updateContacts = [contact, ...updateContacts]
    localStorage.setItem('contacts', JSON.stringify(updateContacts))

    contacts = JSON.parse(localStorage.getItem('contacts')) || null

    return true
}

export const deleteContact = (id) => {
  let updatedContacts = contacts.filter(contact => contact.id != id)
  localStorage.setItem('contacts', JSON.stringify(updatedContacts))

  contacts = JSON.parse(localStorage.getItem('contacts')) || null

  if(contacts)
    return true
  else
    return false
}

export default contacts