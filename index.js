// Function 1: calculateTax
// Calculates a 10% tax on the given amount
function calculateTax(amount) {
    return amount * 0.10;
}

// Function 2: convertToUpperCase
// Coverts string to uppercase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// Function 3: findMaximum
// Returns larger of two numbers
function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Function 4: isPalindrome
// Returns true if the word is a palindrome
function isPalindrome(word) {
    const cleaned = word.toLowerCase();
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

// Function 5: calculateDiscountedPrice
// Returns price after applying discount percentage
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discount = originalPrice * (discountPercentage / 100);
    return originalPrice - discount;
}






// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };