// Assignment Code
let generateBtn = document.querySelector("#generate");

//target copy button
let $copy = document.getElementById("copy");
//add event listener for copy button and call copy to clipboard function
$copy.addEventListener("click", copyToClipboard);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function to generate the password
let generatePassword = function() { 
  // initialize typeArr to store character types selected by the user 
  let typeArr = [];
  
  // prompt user for number of characters to use and store answer as numChars
  const numChars = prompt("How many characters (8-128)");
  
  // check to see if the user input is a number between 8 and 128 characters
  if (!isNaN(numChars) && numChars >= 8 && numChars < 129) {
    // Ask the users to confirm using lowercase letters, uppercase letters, special characters 
    // and numbers.  All confirmed types are stored in the typeArr array
    const useLowerCase = confirm("Would you like to include lowercase letters?");
    if (useLowerCase === true) {
      typeArr.push("lowerCase");
    }
    const useUpperCase = confirm("Would you like to include uppercase letters?");
    if (useUpperCase === true) {
      typeArr.push("upperCase");
    }
    const userSpecialChars = confirm("Would you like to use special characters? (!@#$%&*_-)");
    if (userSpecialChars === true) {
      typeArr.push("specialChars");
    }
    const useNumbers = confirm("Would you like to use numbers?");
    if (useNumbers === true) {
      typeArr.push("numbers");
    }
    
    // check to make sure the user has selected at least 1 type of character for the password
    if (typeArr.length > 0) {
      // initialize passwordText string that will be created and passed to writePassword function
      let passwordText = '';
      // for loop to iterate numChar times
      for (i = 1; i <= numChars; i++) {
        // create random method to pull random type from typeArr on each iteration of for loop
        const random = Math.floor(Math.random() * typeArr.length);
        if (typeArr[random] === "numbers") {
          // if random type is numbers get a random number between 0 and 9
          myRandNum = randomNum(9);
          // Add randomly generated number to password string
          passwordText += myRandNum;
        } else if (typeArr[random] === "upperCase") {
          // if random type is upperCase call randomLetter function
         randLetter = randomLetter();
         // call toUpperCase method to convert random letter to an uppercase letter
         myRandUpperCase = randLetter.toUpperCase();
          //add randomly generated uppercase letter to password string
          passwordText += myRandUpperCase;
        } else if (typeArr[random] === "lowerCase") {
          // if random type is lowerCase call randomLetter function
          myRandLowerCase = randomLetter();
           //add randomly generated lowercase letter to password string
           passwordText += myRandLowerCase;
        } else if (typeArr[random] === "specialChars") {
           // if random type is specialChars call randomSpecialChars function
          myRandSpecialChars = randomSpecailChars();
           //add randomly generated lowercase letter to password string
           passwordText += myRandSpecialChars;
        }
      }
      // return passwordText to writePassword function to be written to textarea
      return passwordText;
      
    // if the user does not select any character types execute the alert
    } else {
      alert("You must select at least one type of character to add.")
    }
  } else {
    // If the user enters anything but a number between 8 and 128 alert with a message
    alert("You must enter a number between 8 and 128.");
  }
};

// function to generate a random num with a max of 9
function randomNum(max) {
  return Math.floor(Math.random() * max);
}

// function to generate a random letter
function randomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// function to generate a random special character
function randomSpecailChars() {
  const specialChars = "!@#$%&*_-";
  return specialChars[Math.floor(Math.random() * specialChars.length)];
}

// copy password to clipboard function
function copyToClipboard() {
  /* Get the text field */
  var copyText = document.getElementById("password");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
   window.navigator.clipboard.writeText(copyText.value);
  

}
