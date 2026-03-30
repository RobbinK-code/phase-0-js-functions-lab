function calculateTax(amount) {
  return amount * 0.10;
}

function convertToUpperCase(text) {
  return text.toUpperCase();
}

function findMaximum(num1, num2) {
  return Math.max(num1, num2);
}

function isPalindrome(word) {
  const cleanedWord = word.toLowerCase();
  const reversedWord = cleanedWord.split('').reverse().join('');
  return cleanedWord === reversedWord;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice - (originalPrice * (discountPercentage / 100));
}