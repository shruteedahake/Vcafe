function Validation() {
    var username = document.regform.username.value;
    if (username == "") {
        alert("Customer Name Can't be NULL");
        return false;
    }
    else if (username.length < 5 || username.length > 20) {
        alert("Length of Username must be Grater than 5 and less than 20")
        return false
    }
    return true;
}

function CheckPassword() {
    var password = document.regform.password.value;
    if (password.length < 8) {
        alert("Passcode must be greater than 8");
        return false;
    }
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (password.match(passw)) {
        return true;
    }
    else {
        alert('Passcode must contain atleast a number,a capital letter and a small letter')
        return false;
    }
}

function PhoneNumber() {
    var phone = document.regform.phone.value;
    if (phone.length != 10) {
        alert("Phone Number must be of 10 digits.");
        return false;
    }
    var phonev = /^[0-9]+$/;
    if (!phone.match(phonev)) {
        alert('Phone Number must be numbers only.')
        return false;
    }
    else {
        return true;
    }
}


