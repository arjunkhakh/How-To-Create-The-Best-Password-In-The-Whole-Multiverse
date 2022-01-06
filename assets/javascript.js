// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = ["A","B","C","D","E","F","G","H", "I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var symbols = ["!","$","£","%","^","&","*","(",")","+","_","=","-","]","[","#","~","@",";",":","<",">","/","?",",","."]
var number = ["1","2","3","4","5","6","7","8","9","0"]

var passwordLength = 0;
var generate = "";
var passwordArray = [ ];

// These 4 functions starts with a confirm box asking for the Array of Letters which goes into the if statement and if it is true 
// then it will add the array to the empty password array which then will be used for generating the password.
// The else if clause will stop the programme from using that array for the password when cancel is selected

function LowerCase() {
  var lowerConfirm = confirm("Would You Like Lowercase Letters?") 


  if(lowerConfirm == true){
    passwordArray = passwordArray.concat(lowercase) 
  } else if (lowerConfirm == false) {
    passwordArray = passwordArray.concat(!lowercase);
  }
  return passwordArray;
}


function UpperCase() {
  var upperConfirm = confirm("Would You Like Uppercase Letters?")

  if(upperConfirm == true){
    passwordArray = passwordArray.concat(uppercase);
  } else if (lowerConfirm == false) {
    passwordArray = passwordArray.concat(!uppercase);
  }
  return passwordArray;
}

function Symbols() {
  var symbolConfirm = confirm("Would You like Symbols?")

  if(symbolConfirm == true){
    passwordArray = passwordArray.concat(symbols);
  } else if (lowerConfirm == false) {
    passwordArray = passwordArray.concat(!symbols);
  }
  return passwordArray;  
}

function Numbers() {
  var numberConfirm = confirm("Would You like Numeric Characters?")

  if(numberConfirm == true){
    passwordArray = passwordArray.concat(number);
  } else if (lowerConfirm == false) {
    passwordArray = passwordArray.concat(!number);
  }
  return passwordArray;
}

// This function is used for the size of the characters and makes sure that it tells the user to choose the correct value

function pwSize() {
  passwordLength = prompt("Choose a password between 8 to 128 characters")

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a password between 8 to 128 characters");
    pwSize()
  } else if (passwordLength == " " || isNaN(parseInt(passwordLength))) {
    alert("Please choose a valid number between 8 to 128 characters")
    pwSize()
  }
  return passwordLength;
}

// This is the generatePassword function which includes the functions and a for loop for generating the password into the box.
function generatePassword() {
  pwSize()
  LowerCase()
  UpperCase()
  Symbols()
  Numbers()

  console.log(passwordArray);

  for (var i = 0, n = passwordArray.length; i<passwordLength; i++) {
    generate += passwordArray[Math.floor(Math.random() * n)]
  }
  return generate;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





