<div id="top"></div>

  <h3 align="center">Password Generator</h3>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://judo2000.github.io/week3-password-generator/)

This is my password generator project.  Using the starter code, I created the generatePassword function that is called from within the writePassword function.

I started by creating a prompt to ask the user how many characters they want the password to be and save that to a variable named numChars.  Then I created confirms for specialChars, lowerCase, uperCase, and numbers. Each type of character that was confirmed by the user was added to an array called typeArr.  

Once I had the users responses I initialized the password and created a for loop that would iterated for the length of numChars.

I then created a method called random that I used to pull a random type from the typeArr array.  Then I created a series of if statements to test the type and run the appropriate function to generate a number, uppercase letter, lowercase letter, or special character and add it to the password string which was passed to the wrietePassword function.

I found the function for alpabet at [Coderrocketfuel.com](https://www.coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript) and used it for both lower and uppercase letters.  For uppercase I just use the toUpperCase() method before adding it to the password string. I copied the alphabet function and used it for the special characters, replacing the alphabet string with special characters.

I got the random function from [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random).

I got the idea from my classmate, Matthew Brignola to add a copy to clipboard function so I found a copy text to clipboard function at [W3Schools](https://www.w3schools.com/howto/howto_js_copy_clipboard.asp).  I edited it to use a copy button that I found at [Icons3.com](https://icons8.com/icons/set/copy-text).
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Stephen Moore - judo2000@comcast.net

Project Link: [https://judo2000.github.io/week2-portfolio/](https://judo2000.github.io/week2-portfolio/)

Github Repo Link: [https://github.com/judo2000/week2-portfolio](https://github.com/judo2000/week2-portfolio)

<p align="right">(<a href="#top">back to top</a>)</p>

[product-screenshot]: password_generator_screenshot.png