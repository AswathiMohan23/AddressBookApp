let data=new Array();
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
            (new addresBookDetails()).name = name.value;
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
            (new addresBookDetails()).phoneNumber = phoneNumber.value;
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
            (new addresBookDetails()).address = address.value;
            addressError.textContent = "";
        } catch (exception) {
            addressError.textContent = exception;
        }
    });
});
let addresBookDetails=new AddresBookDetails();

function savingTheDetails(){
    try{
        addresBookDetails._id=0;
        addresBookDetails._name=document.getElementById('name').value;
        addresBookDetails._phone=document.getElementById('phone').value;
        addresBookDetails._address=document.getElementById('address').value;
        addresBookDetails._city=document.getElementById('city').value;
        addresBookDetails._state=document.getElementById('state').value;
        addresBookDetails._zip=document.getElementById('zip').value;
        console.log(contact);
    }catch (exception) {
        console.error(exception);
    }
    updateToLocalStorage();
}

