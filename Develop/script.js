// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordChar = '';
  var passwordLength = 0;
  passwordLength = prompt('Please enter the length you would like your password to be. The password must be between 8-128 characters long.');

  if (passwordLength >=8 && passwordLength <= 128) {
    optionLowerCase = confirm('Do you want lowercase letters?')
    optionUpperCase = confirm('Do you want uppercase letters?')
    optionNumber = confirm('Do you want numbers?')
    optionSpecialChar = confirm('Do you want special Characters?')
  }
  else {
    alert('you need to pick at least one charactor type.')
  }
}