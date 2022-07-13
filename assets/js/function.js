
//Alert Message
const alertShow = (sms,type = 'danger') => {
    return `<div class="alert-btn ${type}">${sms}</div>`;
}

//set Local Storage

const SetLocalStorage = (StorageName, formData) => {

    //adddata
    let fbPost = []; 
    
    //check local storage
    const Getdata = localStorage.getItem(StorageName);

    if (Getdata) {
        fbPost = JSON.parse(Getdata);
    }

    fbPost.push(formData);
    

    //storage passing data
    localStorage.setItem(StorageName, JSON.stringify(fbPost));

}

//get Local Storage
const getLocalStorage = (StorageName) => {
    return JSON.parse(localStorage.getItem(StorageName));
}

//update Local Storage
const updateLocalStorage = (StorageName, formData) => {

    //storage passing data
    localStorage.setItem(StorageName, JSON.stringify(formData));

}