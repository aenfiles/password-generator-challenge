// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userInput = window.prompt("How many characters would you like in your password?")
  var lengthPassword = parseInt(userInput)

// Password Length
  if (isNaN(lengthPassword)) {
    window.alert("Sorry, that's not a number!")
  } 
  if (lengthPassword < 8 || lengthPassword > 128) {
    window.alert("Password must be between 8 - 128 characters")
    return
  }

// Password criteria prompts
  var wantsNumbers = window.confirm("Would you like numbers in your password?")
  var wantsSymbols = window.confirm("Would you like special characters in your password?")
  var wantsLowercase = window.confirm("Would you like lowercase letters in your password?")
  var wantsUppercase = window.confirm("Would you like uppercase letters in your password?")

// Password criteria lists  
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "$", "*", "^", "?", "+"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Password criteria end result
  var endCriteria = []

  if (wantsNumbers === true) {
    endCriteria.push(numberList)
  }
  if (wantsSymbols === true) {
    endCriteria.push(symbolList)
  }
  if (wantsLowercase === true) {
    endCriteria.push(lowercaseList)
  }
  if (wantsUppercase === true) {
    endCriteria.push(uppercaseList)
  }

  var generatePassword = ""

  for(var i = 0; i < lengthPassword; i++) {
    
  }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
