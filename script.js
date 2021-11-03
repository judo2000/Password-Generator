// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
let typeArr = [];
generateBtn.addEventListener("click", writePassword);
var generatePassword = function() { 
  
  const numChars = prompt("How many characters (8-128)");
  if (!isNaN(numChars) && numChars >= 8 && numChars < 129) {
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
    
    let password = '';
    for (i = 1; i <= numChars; i++) {
      const random = Math.floor(Math.random() * typeArr.length);
      if (typeArr[random] === "numbers") {
        myRandNum = randomNum(9);
        console.log(myRandNum);
        password += myRandNum;
        console.log("password" + password);
        //console.log("password = ", password);
      } else if (typeArr[random] === "upperCase") {
       randLetter = randomLetter();
       myRandUpperCase = randLetter.toUpperCase();
        //console.log(myRandUpperCase);
        password += myRandUpperCase;
      } else if (typeArr[random] === "lowerCase") {
        myRandLowerCase = randomLetter();
         //console.log(myRandLowerCase);
         password += myRandLowerCase;
       } else if (typeArr[random] === "specialChars") {
        myRandSpecialChars = randomSpecailChars();
         console.log(myRandSpecialChars);
         password += myRandSpecialChars;
         console.log("password" + password);
       }
       passwordText = password;
      
    }
    return passwordText;
  } else {
    alert("You must enter a number between 8 and 128.");
  }
};

function randomNum(max) {
  return Math.floor(Math.random() * max);
}

function randomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function randomSpecailChars() {
  const specialChars = "!@#$%&*_-";
  return specialChars[Math.floor(Math.random() * specialChars.length)];
}