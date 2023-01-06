let newPerson=new Array();
let isUpdate=false;

window.addEventListener('DOMContentLoaded',(event)=>{
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.text-error');
    name.addEventListener('input',function () {
        if (name.value.length == 0) {
            nameError.textContent = "*Name cannot be empty...Enter a valid name";
            return;
        }
        try {
            (new AddresBookDetails()).name = name.value;
            nameError.textContent = "";
        } catch (exception) {
            nameError.textContent = exception;
        }
    });

    const phoneNumber = document.querySelector('#phn');
    const phoneNumberError = document.querySelector('.phn-error');
    phone.addEventListener('input',function () {
        if (phoneNumber.value.length == 0) {
            phoneNumberError.textContent = "*Invalid Phone number ... Enter a valid one";
            return;
        }
        try {
            (new AddresBookDetails()).phoneNumber = phoneNumber.value;
            phoneNumberError.textContent = "";
        } catch (exception) {
            phoneNumberError.textContent = exception;
        }
    });

    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input',function () {
        if (address.value.length == 0) {
            addressError.textContent = "Enter proper address.....";
            return;
        }
        try {
            (new AddresBookDetails()).address = address.value;
            addressError.textContent = "";
        } catch (exception) {
            addressError.textContent = exception;
        }
    });
});