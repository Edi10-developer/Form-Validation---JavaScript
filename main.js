function validateForm() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let repeatPassword = document.getElementById('repeatPassword').value;

    /*
    let validEmail = ValidateEmail(email);
    let validPassword = ValidatePassword(password);
    let validRepeatPassword = ValidateRepeatPassword(password);

    
    if (validEmail && validPassword && validRepeatPassword) {
        window.location = "validation.html"; // Redirecting to other page.
    }
    */
   let valid = false;
   const regexEmail = /\S+[a-z0-9]@[a-z0-9\.]+/;
   if(!regexEmail.test(email)){
    document.getElementById('mailError').style.display = 'block';
   }else{
       valid = true;
   }

};

// Email
function ValidateEmail(email) {
    const regexEmail = /\S+[a-z0-9]@[a-z0-9\.]+/;
    if (regexEmail.test(email)) {
        return true
    }
    document.getElementById('mailError').style.display = 'block';
    return (false)
};


// Password
function ValidatePassword(password) {
    if (/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/.test(password)) {
        return (true)
    }
    document.getElementById('passwordError').style.display = 'block';
    return (false)
};


// Repeat Password
function ValidateRepeatPassword(password) {
    if (password !== document.getElementById('repeatPassword')) {
        document.getElementById('repeatPasswordError').style.display = 'block';
        return (false)
    }
    return (true)
};

