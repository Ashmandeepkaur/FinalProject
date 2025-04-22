// script.js
document.getElementById('survey-form').addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();
    
    let isValid = true;
    
    if (!isNotEmpty('name')) isValid = false;
    if (!isValidEmail('email')) isValid = false;
    if (!hasCheckedOption('gender')) isValid = false;
    if (!isSelected('country')) isValid = false;
    if (!isValidUsername('username')) isValid = false;
    if (!isValidCustomId('custom-id')) isValid = false;

    if (isValid) {
        this.submit();
    }
});

function isNotEmpty(fieldId) {
    const field = document.getElementById(fieldId);
    if (field.value.trim() === '') {
        showError(fieldId, 'This field cannot be empty.');
        return false;
    }
    return true;
}

function isValidEmail(fieldId) {
    const field = document.getElementById(fieldId);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(field.value)) {
        showError(fieldId, 'Please enter a valid email address.');
        return false;
    }
    return true;
}

function hasCheckedOption(name) {
    const options = document.getElementsByName(name);
    const checked = Array.from(options).some(option => option.checked);
    if (!checked) {
        showError(name + '-error', 'Please select an option.');
        return false;
    }
    return true;
}

function isSelected(fieldId) {
    const field = document.getElementById(fieldId);
    if (field.value === '') {
        showError(fieldId, 'Please select an option.');
        return false;
    }
    return true;
}

function isValidUsername(fieldId) {
    const field = document.getElementById(fieldId);
    const regex = /^[A-Za-z0-9]+$/;
    if (!regex.test(field.value)) {
        showError(fieldId, 'Username must be alphanumeric only.');
        return false;
    }
    return true;
}

function isValidCustomId(fieldId) {
    const field = document.getElementById(fieldId);
    const regex = /^[A-Z]{3}-[0-9]{4}$/;
    if (!regex.test(field.value)) {
        showError(fieldId, 'Custom ID must follow the format: ABC-1234.');
        return false;
    }
    return true;
}

function showError(fieldId, message) {
    document.getElementById(fieldId + '-error').textContent = message;
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => {
        message.textContent = '';
    });
}
