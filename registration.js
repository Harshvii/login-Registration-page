function showRegistration() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'block';
}

function showLogin() {
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        alert('Login successful!');
    } else {
        alert('Please fill in all fields!');
    }
}

function register() {
 
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const phone = document.getElementById('phone').value;
    const occupation = document.getElementById('occupation').value;

    if (!firstName || !lastName || !age || !gender || !phone || !occupation) {
        alert('Please fill in all required fields!');
        return;
    }

    const confirmationMessage = `
    Please confirm your details:
    
    Full Name: ${firstName} ${middleName} ${lastName}
    Age: ${age}
    Gender: ${gender}
    Phone: ${phone}
    Occupation: ${occupation}
    `;

    if (confirm(confirmationMessage)) {
        alert('Registration successful!');
        showLogin(); 
    }
} 