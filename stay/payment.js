// Card number formatting: add a space after every 4 digits
function formatCardNumber(value) {
    return value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
  }
  
  // Validate credit card number using the Luhn algorithm
  function isValidCardNumber(cardNumber) {
    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      const digit = parseInt(cardNumber.charAt(i), 10);
      if (shouldDouble) {
        const doubledDigit = digit * 2;
        sum += (doubledDigit > 9) ? (doubledDigit - 9) : doubledDigit;
      } else {
        sum += digit;
      }
      shouldDouble = !shouldDouble;
    }
    return (sum % 10) === 0;
  }
  
  // Auto slash for MM/YY format in the expiry date input
  function autoSlashExpiryDate(event) {
    const input = event.target;
    const value = input.value.replace(/\s/g, '');
  
    if (value.length === 2 && event.inputType !== 'deleteContentBackward') {
      input.value = `${value}/`;
    } else if (value.length > 2 && value.indexOf('/') === -1) {
      input.value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
  }
  
  // Validate expiry date in MM/YY format
  function isValidExpiryDate(expiryDate) {
    const pattern = /^(0[1-9]|1[0-2])\/(2[2-9]|[3-9]\d)$/;
  
    if (!pattern.test(expiryDate)) {
      return false;
    }
  
    const [month, year] = expiryDate.split('/');
    const currentYear = new Date().getFullYear() % 100; // Get last two digits of the current year
    const currentMonth = new Date().getMonth() + 1; // Get current month (1-12)
  
    const expiryYear = parseInt(year, 10);
    const expiryMonth = parseInt(month, 10);
  
    // Validate that the expiry date is in the future
    if (
      expiryYear < currentYear ||
      (expiryYear === currentYear && expiryMonth < currentMonth)
    ) {
      return false;
    }
  
    return true;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const cardNumberInput = document.getElementById('cardNumber');
    const expiryDateInput = document.getElementById('expiryDate');
    const cvvInput = document.getElementById('cvv');
    const cardHolderNameInput = document.getElementById('cardHolderName');
  
    cardNumberInput.addEventListener('input', (event) => {
      const value = event.target.value;
      event.target.value = formatCardNumber(value);
    });
  
    // Add auto slash for MM/YY format in the expiry date input
    expiryDateInput.addEventListener('input', autoSlashExpiryDate);
  
    // Handle form submission
    document.getElementById('creditCardForm').addEventListener('submit', (event) => {
      event.preventDefault();
  
      const cardNumber = cardNumberInput.value.replace(/\s/g, '');
      const expiryDate = expiryDateInput.value;
      const cvv = cvvInput.value;
      const cardHolderName = cardHolderNameInput.value.toUpperCase();
  
      // Card number and CVV must contain only digits
      if (!/^\d+$/.test(cardNumber) || !/^\d+$/.test(cvv)) {
        alert('Please enter valid card number and CVV.');
        return;
      }
  
      // Validate card number using the Luhn algorithm
      if (!isValidCardNumber(cardNumber)) {
        alert('Invalid card number.');
        return;
      }
  
      // Validate expiry date in MM/YY format
      if (!isValidExpiryDate(expiryDate)) {
        alert('Invalid expiry date. Please enter a valid date in MM/YY format and ensure it is in the future.');
        return;
      }
  
      // If all validations pass, you can submit the form to the server or proceed as needed.
      alert('Credit card information is valid and ready for submission!');
      // For a real-world application, submit the form to the server for further processing.
      // Example: document.getElementById('creditCardForm').submit();
    });
  });
  