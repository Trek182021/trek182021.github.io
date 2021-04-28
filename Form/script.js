const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const errorMessage = formControl.querySelector('small');
    errorMessage.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if (input.value.trim() === '') {
            if(input === password2) {
                showError(input, 'Password is required');
            } else {
                showError(input, `${getFieldName(input)} is required`)
            }
            
        } else {
            showSuccess(input);
        }
    })
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must at least have ${min} characters.`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${min} characters.`)
    } else {
        showSuccess(input);
    }
}

function checkPassword(firstPass, secondPass) {
    if(firstPass.value !== secondPass.value) {
        showError(secondPass, 'Passwords do not match');
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
if (form) {
    form.addEventListener('submit',function(e) {
        e.preventDefault();
        
       checkRequired([username,email,password,password2]);
       checkEmail(email);
       checkLength(username, 3, 15);
       checkLength(password, 6, 18);
       checkPassword(password, password2);
    });
} else {
    alert("Form is Empty")
}
