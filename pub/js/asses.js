document.getElementById('kycForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    let isValid = true;

    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const country = document.getElementById('country').value.trim();
    const state = document.getElementById('state').value.trim();
    const town = document.getElementById('town').value.trim();
    const zipCode = document.getElementById('zipCode').value.trim();
    const phoneNumber1 = document.getElementById('phoneNumber1').value.trim();
    const phoneNumber2 = document.getElementById('phoneNumber2').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validation checks
    // First Name
    if (!firstName || firstName.length < 2 || firstName.length > 255 || /\d/.test(firstName)) {
        document.getElementById('firstNameError').textContent = 'Enter Your First Name here.';
        isValid = false;
    }

    // Last Name
    if (!lastName || lastName.length < 2 || lastName.length > 255 || /\d/.test(lastName)) {
        document.getElementById('lastNameError').textContent = 'Enter your Last Name here.';
        isValid = false;
    }

    // Gender
    if (!gender || (gender !== 'Male' && gender !== 'Female')) {
        document.getElementById('genderError').textContent = 'select your Gender.';
        isValid = false;
    }

    // Date of Birth
    if (!dob) {
        document.getElementById('dobError').textContent = 'Select your Date of Birth .';
        isValid = false;
    } else {
        const dobDate = new Date(dob);
        const today = new Date();
        const age = today.getFullYear() - dobDate.getFullYear();
        const monthDiff = today.getMonth() - dobDate.getMonth();
        const dayDiff = today.getDate() - dobDate.getDate();
        if (age < 18 || (age === 18 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))) {
            document.getElementById('dobError').textContent = 'You must be at least 18 years old.';
            isValid = false;
        }
    }

    // Address
    const addressFields = ['country', 'state', 'town'];
    addressFields.forEach(field => {
        const value = document.getElementById(field).value.trim();
        if (value.length < 2 || value.length > 255) {
            document.getElementById(`${field}Error`).textContent = `${field.charAt(0).toUpperCase() + field.slice(1)} Select your Area of Residence.`;
            isValid = false;
        }
    });

    // Zip Code
    if (!/^\d{5,10}$/.test(zipCode)) {
        document.getElementById('zipCodeError').textContent = 'Zip Code must be between 5 and 10 digits.';
        isValid = false;
    }

    // Email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Phone Numbers
    const phonePattern = /^\+?\d{10,15}$/; // Allows + and digits from 10 to 15 characters
    if (!phonePattern.test(phoneNumber1)) {
        document.getElementById('phoneNumber1Error').textContent = 'Phone Number 1 must be between 10 and 15 digits, optionally starting with a +.';
        isValid = false;
    }
    if (phoneNumber2 && !phonePattern.test(phoneNumber2)) {
        document.getElementById('phoneNumber2Error').textContent = 'Phone Number 2 must be between 10 and 15 digits, optionally starting with a +.';
        isValid = false;
    }

    // Submit form if valid
    if (isValid) {
        alert('Form submitted successfully!');
        // Perform form submission or further processing here
    }
});
