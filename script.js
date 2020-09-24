// make four variables of lower case upper case and special carters and numbers.  these will be arrays holding your options.
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"]
// function to prompt user for password options
function passwordOptions() {
    var length = parseInt(prompt("Pick between 8 and 128 characters for password"));// prompt asking user to pick a number between 8 and 128
    if (length < 8) {
        alert("please enter 8 or more carters!")
        return
    }
    if (length > 128) {
        alert("shorter password please")
        return
    }
    var hasUpperCase = confirm("do you want upper case letters?")
    var hasLowerCase = confirm("do you want lower case letters?")
    var hasNumbers = confirm("do you want numbers?")
    var hasSpecial = confirm("do you want special characters?")
    
    // you will need to make confirms for the rest of the actions
    // we need to creat an IF statement checking if at least has upper case, lower case, number, special
    if (hasUpperCase === false &&
        hasLowerCase === false &&
        hasNumbers === false &&
        hasSpecial === false
    ) {
        alert("Please chose one option")
    }
    var options = {
        length: length,
        hasUpperCase: hasUpperCase,
        hasLowerCase: hasLowerCase,
        hasNumbers: hasNumbers,
        hasSpecial: hasSpecial
    }
    return options
}
// Function for getting a random element from an array
function randomizer(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
}

function generatePassword() {
    var options = passwordOptions()
    var password = []
    var possible = []
    var guaranteed = []

    // four if statements to check what options the user wants 
    if (options.hasLowerCase) {
        possible = possible.concat(lowerCase)
        guaranteed.push(randomizer(lowerCase))
    }
    if (options.hasUpperCase) {
        possible = possible.concat(upperCase)
        guaranteed.push(randomizer(upperCase))
    }
    if (options.hasNumbers) {
        possible = possible.concat(numbers)
        guaranteed.push(randomizer(numbers))
    }
    if (options.hasSpecial) {
        possible = possible.concat(specialCharacter)
        guaranteed.push(randomizer(specialCharacter))
    }


    for (var i = 0; i < options.length; i++) {
        var characters = randomizer(possible)
        password.push(characters)
    }
    for (var i = 0; i < guaranteed.length; i++) {
        password[i] = guaranteed[i]
    }


    return password.join("")
}


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