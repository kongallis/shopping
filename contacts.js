var tries = 0; 

for (var i = 0; i < contacts.length; i++) {
   

    if (contacts[i].firstname == name) {
        if (contacts[i][prop] == "lastName") {
            return contacts[i]["lastName"];
    } 
        else if (contacts[i][prop] == "number" ) {
            return contacts[i]["number"];  
    } 
        else if (contacts[i][prop] == "likes" ) {
            return contacts[i]["likes"];  
    } 
        else {
            return "No such property";
                }
}   
    else {
        tries = tries + 1;
         }
};

if (tries == 4) {
    return "No such contact";
}

