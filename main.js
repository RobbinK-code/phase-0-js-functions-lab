function calculateTax(amount) {
  if (amount === 0) {
    return 0;
  }
  else if (amount < 0) {
    return amount * 0.10;
  }
  return amount * 0.10;
}

function convertToUpperCase(text) {
  if (text === '') {
    return text;
  }
  else if (text === text.toLowerCase()) {
    return text.toUpperCase();
  }
  else {
    return text;
  }
}

function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  else if (num2 > num1) {
    return num2;
  }
  else {
    return num1;
  }
}

function isPalindrome(word) {
  // Remove non-alphanumeric characters and convert to lowercase
  word = word.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  // Check if the word is the same forwards and backwards
  return word === word.split('').reverse().join('');
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  if (discountPercentage === 0) {
    return originalPrice;
  }
  else if (discountPercentage === 100) {
    return 0;
  }
  else if (discountPercentage > 100) {
    return 0;
  }
  else if (discountPercentage < 0) {
    return originalPrice;
  }
  else {
    return originalPrice - (originalPrice * (discountPercentage / 100));
  }
}


