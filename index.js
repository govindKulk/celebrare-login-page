let form = document.getElementById('form');
let submitbutton = document.querySelector('.submit');
let onlineId = document.getElementById('onlineId');
let password = document.getElementById('password');
let loadingSpinner = document.querySelector('.loading__spinner');
let buttonText = document.getElementById('buttonText');

form.addEventListener('submit', handleSubmit);

onlineId.addEventListener('change', (e) => {
    if(onlineId && password){
        submitbutton.style.animation = "submitButtonAnimation 0.3s ease-in forwards"

    }
})
password.addEventListener('change', (e) => {
    if(onlineId && password){
        submitbutton.style.animation = "submitButtonAnimation 0.3s ease-in forwards"

    }
})




function handleSubmit(e) {

    e.preventDefault();
    console.log("submit")

    const formData = new FormData(event.target); // Create a FormData object

    // Access form data
    const onlineId =  formData.get('onlineId');
    const password = formData.get('password');

    if(!onlineId || !password) {
        return;
    }

        buttonText.style.animation = "to-right-text 0.5s ease-in 0.3s forwards"
        loadingSpinner.style.animation = "to-right 0.5s ease-in 0.8s forwards"



}

