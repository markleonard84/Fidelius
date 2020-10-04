// Assignment Code.
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = "!@£$%^&*()_+-=][{};:<>?/÷`~";
// Start of generate password function. 
function generatePassword() { //Gets values from the password option check boxes.
    var length = document.querySelector("#length").value;
    var hasLowerCase = document.querySelector("#lowerCase").checked;
    var hasUpperCase = document.querySelector("#upperCase").checked;
    var hasNumbers = document.querySelector("#numbers").checked;
    var hasSpecialCharacters = document.querySelector("#specialCharacters").checked;
    //Start of code to create random character string set at desired character length. Returns random character string.
    var characterMix = "";
    if (hasLowerCase) {
        characterMix += lowerCase;
    }
    if (hasUpperCase) {
        characterMix += upperCase;
    }
    if (hasNumbers) {
        characterMix += numbers;
    }
    if (hasSpecialCharacters) {
        characterMix += specialCharacters;
    }
    var calculateRandom = "";
    for (var i = 0; i < length; i++) {
        calculateRandom += characterMix.charAt(Math.floor(Math.random() * characterMix.length));
    }
    return calculateRandom;
}
// Writes password to the #password input.
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
// Adds an event listener to generate button and trigger function.
generateBtn.addEventListener("click", writePassword);