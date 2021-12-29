// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //prompt the user for password 

  //  - Password Length 8 < 128

  // - lowercase, uppercase, speacial charaters

  //Validate input for character selector 
  
  //Generate password 

  // Display password to page 
  return "generated password will go here";
};

// Write password to the #password input
function writePassword(num) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
