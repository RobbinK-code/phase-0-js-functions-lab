function calculateTax(amount) {
  return amount * 0.10;
}
if (amount === 0) {
    return 0;
}
else if (amount < 0) {
    return amount * 0.10;
}

function convertToUpperCase(text) {
  return text.toUpperCase();
}
if (text === text.toLowerCase()) {
    return text.toUpperCase();
}
else {
    return text;
}
else if text is empty string {
    return text;
}
else if text is mixed case {
    return text.toUpperCase();
}
else if text contains non-alphabetic characters {
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
  return Math.max(num1, num2);
}
if (num1 > num2) {
    return num1;
}
else if (num2 > num1) {
    return num2;
}
else if (num1 is positive && num2 is negative) {
    return num1;
}
else if (num1 is negative && num2 is positive) {
    return num2;
}
else if (num1 is negative && num2 is negative) {
    return Math.min(num1, num2);
}
else if (num1 === num2) {
    return num1; // or num2, since they are equal
}

function isPalindrome(word) {
    // Remove non-alphanumeric characters and convert to lowercase
    word = word.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    // Check if the word is the same forwards and backwards
    return word === word.split('').reverse().join('');
}

function calculateDiscountedprice(originalPrice, discountPercentage) {
  return originalPrice - (originalPrice * (discountPercentage / 100));
}
if discountPercentage === 0 {
    return originalPrice;
}
else if discountPercentage === 100 {
    return 0;
}
else if discountPercentage > 100 {
    return 0;
}
else if discountPercentage < 0 {
    return originalPrice;
}
else {
    return originalPrice - (originalPrice * (discountPercentage / 100));
}