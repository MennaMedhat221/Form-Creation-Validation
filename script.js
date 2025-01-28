document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    const usernameElement = document.getElementById('username');
    const emailElement = document.getElementById('email');
    const passwordElement = document.getElementById('password');


    let isValid = true;
    let messages = [];
    form.addEventListener('submit', function(event) {
        const username = usernameElement.value.trim();
        const email = emailElement.value.trim();
        const password = passwordElement.value.trim();

        event.preventDefault();
        feedbackDiv.innerHTML = '';
        messages=[];

        if(username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long');
        }
        if(!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must contain @ and .');
        }
        if(password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long');
        }
        
        if(isValid) {            
            feedbackDiv.style.display = 'block';
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        }else {
            feedbackDiv.style.display = 'block';
            const message = messages.join('<br>');
            feedbackDiv.innerHTML += message;
            feedbackDiv.style.color = '#dc3545'

        }

        isValid = true;


    });
    



});
