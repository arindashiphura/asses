document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('kycForm').addEventListener('submit', function(event) {
    let valid = true;

    // First Name Validation
    const firstName = document.getElementById('firstName');
    if (firstName.value.trim() === '') {
      firstName.placeholder = 'First name is required.';
      firstName.classList.add('error-border');
      valid = false;
    } else {
      firstName.placeholder = '';
      firstName.classList.remove('error-border');
    }

    // Last Name Validation
    const lastName = document.getElementById('lastName');
    if (lastName.value.trim() === '') {
      lastName.placeholder = 'Last name is required.';
      lastName.classList.add('error-border');
      valid = false;
    } else {
      lastName.placeholder = '';
      lastName.classList.remove('error-border');
    }

    // Date of Birth Validation
    const dob = document.getElementById('dob');
    if (dob.value === '') {
      dob.classList.add('error-border');
      valid = false;
    } else {
      dob.classList.remove('error-border');
    }

    // Gender Validation
    const gender = document.getElementById('gender');
    if (gender.value === '') {
      gender.classList.add('error-border');
      valid = false;
    } else {
      gender.classList.remove('error-border');
    }

    // Country Validation
    const country = document.getElementById('country');
    if (country.value.trim() === '') {
      country.placeholder = 'Country is required.';
      country.classList.add('error-border');
      valid = false;
    } else {
      country.placeholder = '';
      country.classList.remove('error-border');
    }

    // State Validation
    const state = document.getElementById('state');
    if (state.value.trim() === '') {
      state.placeholder = 'State is required.';
      state.classList.add('error-border');
      valid = false;
    } else {
      state.placeholder = '';
      state.classList.remove('error-border');
    }

    // Town Validation
    const town = document.getElementById('town');
    if (town.value.trim() === '') {
      town.placeholder = 'Town is required.';
      town.classList.add('error-border');
      valid = false;
    } else {
      town.placeholder = '';
      town.classList.remove('error-border');
    }

    // Zip Code Validation
    const zipCode = document.getElementById('zipCode');
    if (zipCode.value !== '' && isNaN(zipCode.value)) {
      zipCode.placeholder = 'Must be a number.';
      zipCode.classList.add('error-border');
      valid = false;
    } else {
      zipCode.placeholder = '';
      zipCode.classList.remove('error-border');
    }

    // Phone Number 1 Validation
    const phoneNumber1 = document.getElementById('phoneNumber1');
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber1.value)) {
      phoneNumber1.placeholder = 'Enter valid 10-digit number.';
      phoneNumber1.classList.add('error-border');
      valid = false;
    } else {
      phoneNumber1.placeholder = '';
      phoneNumber1.classList.remove('error-border');
    }

    // Email Validation
    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      email.placeholder = 'Enter valid email.';
      email.classList.add('error-border');
      valid = false;
    } else {
      email.placeholder = '';
      email.classList.remove('error-border');
    }

    // Prevent form submission if validation fails
    if (!valid) {
      event.preventDefault();
    }
  });
});
