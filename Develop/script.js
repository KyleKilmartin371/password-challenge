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
	var optionLowerCase = false, optionUpperCase = false, optionNumber = false, optionSpecialChar = false;
	passwordLength = prompt('Please enter the length you would like your password to be. The password must be between 8-128 characters long.');

	if (passwordLength >= 8 && passwordLength <= 128) {
		optionLowerCase = confirm('Do you want lowercase letters?');
		optionUpperCase = confirm('Do you want uppercase letters?');
		optionNumber = confirm('Do you want numbers?');
		optionSpecialChar = confirm('Do you want special Characters?');

		if (optionLowerCase || optionUpperCase || optionNumber || optionSpecialChar) {
			return passwordChar = createPassword(passwordLength, [optionLowerCase, optionUpperCase, optionNumber, optionSpecialChar]);
		}
		else {
			alert('you need to pick at least one charactor type.');
			return generatePassword();
		}
	}
	else {
		alert('Invalid password length.');
		return generatePassword();
	}
}

function createPassword(passLength, passOptions) {
	var generatePassword = '';
	const lowerCase = "abcdefghijklmnopqrstuvwxyz";
	const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const numbers = "0123456789";
	const specialChar = "~`!@#$%^&*()-_=+{}[]|:;<,>.?/";

	for (var i = 0; i < passLength; i++) {
		var kashmir;
		
		do {
			kashmir = Math.floor(Math.random() * passOptions.length);
		} while(!passOptions[kashmir]);

		switch (kashmir) {
			case 0:
				generatePassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
				break;
			case 1:
				generatePassword += upperCase[Math.floor(Math.random() * upperCase.length)];
				break;
			case 2:
				generatePassword += numbers[Math.floor(Math.random() * numbers.length)];
				break;
			case 3:
				generatePassword += specialChar[Math.floor(Math.random() * specialChar.length)];
				break;
		}
	}
	return generatePassword;
}