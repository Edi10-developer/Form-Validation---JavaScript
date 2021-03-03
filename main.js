
// Form Validation
function validateForm() {
    // Form's values
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let repeatPassword = document.getElementById('repeatPassword').value;

    // Checking form's values
    let validEmail = ValidateEmail(email);
    let validPassword = ValidatePassword(password);
    let validRepeatPassword = ValidateRepeatPassword(password, repeatPassword);

    // If checking was good SUBMIT FORM
    if (validEmail && validPassword && validRepeatPassword) {
        document.querySelector('#myForm').submit();
    }
};


// Email
function ValidateEmail(email) {
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(regexEmail)) {
        return true
    } else {
        document.getElementById('mailError').style.display = 'block';
        return (false)
    }
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
function ValidateRepeatPassword(password, repeatPassword) {
    if (password !== repeatPassword) {
        document.getElementById('repeatPasswordError').style.display = 'block';
        return (false)
    }
    return (true)
};

