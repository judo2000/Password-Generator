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

let myArr = [];
generateBtn.addEventListener("click", writePassword);
var generatePassword = function() { 
  
  const numChars = prompt("How many characters (8-126)");
  if (!isNaN(numChars) && numChars >= 8 && numChars < 129) {
    
    const userSpecialChars = confirm("Would you like to use special characters? ($$*%_ etc)");
    if (userSpecialChars === true) {
      myArr.push("specialChars");
    }
    const useUpperCase = confirm("Would you like to include uppercase letters?");
    if (useUpperCase === true) {
      myArr.push("upperCase");
    }
    const useNumbers = confirm("Would you like to use numbers?");
    if (useNumbers === true) {
      myArr.push("numbers");
    }
    
    const random = Math.floor(Math.random() * myArr.length);
    //console.log(random, myArr[random]);
    
    for (i = 1; i <= numChars; i++) {
      const random = Math.floor(Math.random() * myArr.length);
      //console.log(myArr[random]);
      if (myArr[random] === "numbers") {
        myRandNum = randomNum(9);
        console.log(myRandNum);
      } else if (myArr[random] === "upperCase") {
       myRandUpperCase = randomLetter().toUpperCase;
        console.log(myRandUpperCase);
      }
    }
  } else {
    generatePassword();
  }
  return;
};