function remove(node) {
    let addressBookData=data.find(i=>i._id== node.id);
    if(!addressBookData){
        console.log("No entry found");
         return;
    }
    
    const index=data
        .map(i=>i._id)
        .indexOf(addressBookData._id);
        data.splice(index,1);
    localStorage.setItem("AddressBookList",JSON.stringify(data));
    createInnerHtml();
    
}

function update(node){
    let addressBookData = data.find(bookObj=>bookObj._id == node.id);
    if(!addressBookData){
        console.log("No entry found");
        return;
    }
    localStorage.setItem('editContact', JSON.stringify(contact,'\t', 2));
    window.location.replace(site_properties.contact_form);
    checkForUpdate();
}


