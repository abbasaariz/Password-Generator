// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordTextbox = document.querySelector("#password");

function askPasswordLength() {
  // validate the password 
  const length = prompt("Enter the length of password:(8-128 characters)");

  // we only accept a number between 8-128
  // if this fails, then re-ask the question
  if (length > 8 && length < 128) {
    // the length is ok
    return parseInt(length);

  } else {
    // length is not ok
    // we re-ask the question here
    // recursive function is  a function that calls itself
    return askPasswordLength();
  }
}

function repeatString(character, times) {
  let result = "";
  for (let index = 0; index < times; index++) {
    result += character
  }
  return result;
}

repeatString('a', 10);

function generatePassword(criterias) {

  const length = criterias.length;
  const lowercase = criterias.lowerCase;
  const uppercase = criterias.upperCase;
  const numbers = criterias.numbers;
  const specialChar = criterias.specialChar;

  let characters = "";
  if (lowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  if (uppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numbers) {
    characters += "0123456789";
  }
  if (specialChar) {
    characters += "!@#$%^&*()";
  }

  function generateRandomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)]
  }
  let result = "";

  // 1. generate a password with the correct length
  for (let index = 0; index < length; index++) {
    result += generateRandomCharacter()
  }
  return result;
}

// Write password to the #password input
function writePassword() {
  const criterias = {};

  // 1. Prompt the user options
  // a. ask the user to choose between 8-128 chars
  criterias.length = askPasswordLength();

  // b. ask if lowercase
  criterias.lowerCase = confirm("Do you want lowercase?")
  // c. ask if uppercase
  criterias.upperCase = confirm("Do you want uppercase?")
  // d. ask if numeric
  criterias.numbers = confirm("Do you want numbers?")
  // e. ask if special chars 
  criterias.specialChar = confirm("Do you want special characters?")

  // 2. display the chosen criterias, ask for confirmation
  const confirmed = confirm('Please confirm the chosen criterias ' + JSON.stringify(criterias));
  if (confirmed) {

    // 3. if user clicks ok, generate the password based on criterias and show 
    const password = generatePassword(criterias);
    console.log(password);

    // set the textbox as the variable password
    passwordTextbox.value = password;
  } else {

    // 4. if user clicks cancel: exit
    return;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
