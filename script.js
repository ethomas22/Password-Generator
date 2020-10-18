// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function that generates password

function generatePassword() {
  
  // This if statement is ensuring correct password length

  while (true) {
    var passwordLength = prompt("How many characters long do you want your password?");
  console.log(passwordLength);
  
    if ((passwordLength >= 8) && (passwordLength <= 128)) {
      console.log("password is ok");
      break;
    } else {
      console.log("length is more than");
      alert("Password needs to be at least 8 chatacters and no more than 128");
    }
  
  }
  
  // This will validate that at least one promopt is marked true

  // If none are true, alert will be prompted

  while (true) {
    var passwordLower = confirm("Do you want lowercase letters?");
    console.log(passwordLower);
    
    var passwordUpper = confirm("Do you want uppercase letters?");
    console.log(passwordUpper);
    
    var passwordNumbers = confirm("Do you want numbers?");
    console.log(passwordNumbers);
    
    var passwordSpecial = confirm("Do you want special characters?");
    console.log(passwordSpecial);

    if ((passwordLower === true) || (passwordUpper === true) ||(passwordNumbers === true) || (passwordSpecial === true)) {
      break;
    } else {
      alert("You must choose at least one character type");
    }
  }

  var finalPassword = "";

// need for loop, the for loop will help read through the array

// each for loop will be inside a function 

// no if statements needed each function will be wrapped in a while loop

  if (passwordLower === true) {
    finalPassword = "";
  }
  
  if (passwordUpper === true) {
    finalPassword = "KDJGDKG";
  }

  if (passwordNumbers === true) {
    finalPassword = "787669";
  }

  if (passwordSpecial ===true) {
    finalPassword = "!?$%#&";
  }


  // Character arrays

  var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var specialArray = ["!", "#", "$", "%", "&", "*", "?", "@", "^", "(", ")"];

  return finalPassword;
}