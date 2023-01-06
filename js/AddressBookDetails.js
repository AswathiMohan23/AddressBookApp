class AddresBookDetails{
    get id() {return this._id;}
    set id(id){
        this._id=id;
    }

    get name(){ return this._name;}
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if(nameRegex.test(name)) 
            this._name = name;
        else throw "The entered name is Invalid try again...................";
    }

    get phone() {return this._phone;}
    set phone(phone){
        let phoneRegex=RegExp('^[0-9]{10}$');
        if (phoneRegex.test(phone)) 
            this._phone = phone;
        else throw 'The entered Phone Number is Invalid try again...................';
    }

    get address() {return this._address;}
    set address(address){
        if (addressValidation(address)) 
            this._address = address;
        else throw 'Address is Invalid try again...................';
    }

    get city() {return this._city;}
    set city(city){
        this._city = city;
    }

    get state() {return this._state;}
    set state(state){
        this._states = state;
    }

    get zip() {return this._zip;}
    set zip(zip){
        this._zip = zip;
    }
}

function addressValidation(address){
    let addressBookArray=address.split(" ");
    for(var i=0;i<addressBookArray.length;i++){
        if (addressBookArray[i].length<4) 
            return false;
    }
    return true;
}

let contact=new AddresBookDetails();