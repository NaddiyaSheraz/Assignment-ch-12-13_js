// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
var char = prompt("Please enter a character (number or letter):");
if (asciiCode >= 48 && asciiCode <= 57) {
    document.write("The character is a number.");
  } 
  // Check karte hain ke character uppercase letter hai
  else if (asciiCode >= 65 && asciiCode <= 90) {
    document.write("The character is an uppercase letter.");
  } 
  // Check karte hain ke character lowercase letter hai
  else if (asciiCode >= 97 && asciiCode <= 122) {
    document.write("The character is a lowercase letter.");
  } 
  // Agar koi aur character ho
  else {
    document.write("The character is not a number or letter.");
  }




// Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal. 
var a = +prompt("Write first number");
var b = +prompt("Write second number");
if(a > b){
    alert("first number is larger than second number")
}else if(a < b){
    alert("first number is less than second number")
}else{
    alert("first number is equal to second number")
}

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var number = +prompt("Enter a number");
if(number > 0){
    document.write(`${number} is a positive number `);
}else if(number < 0){
    document.write(`${number} is a negative number `);
}else {
    document.write(`${number} is equal to zero `);
}

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var alphabet = prompt("write an alphabet in lowercase");
switch(alphabet){
    case "a":
      document.write(`${alphabet} is vowel`);
      break;
    case "e":
      document.write(`${alphabet} is vowel`);
      break;
    case "i":
        document.write(`${alphabet} is vowel`);
      break;
      case "o":
      document.write(`${alphabet} is vowel`);
      break;
    case "u":
        document.write(`${alphabet} is vowel`);
      break;
    default:
      alert("This is not a vowel");
  }

// 5. Write a program that 
//   a. Store correct password in a JS variable. 
var password ="Naddiyasheraz18"
//   b.  Asks user to enter his/her password 
var userPassword = prompt("Enter a pasword");
//   c.  Validate the two passwords: 
//     i. Check if user has entered password. If not, then give message “ Please enter your password” 
if (userPassword === null || userPassword === "") {
    alert("Please enter your password")
}else{
//     ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show 
//         “Incorrect password” otherwise.
if (userPassword === password) {
    alert("Correct! The password you entered matches the original password.")
} else {
    alert("Incorrect password")
}
}

// 6. This if/else statement does not work. Try to fix it: 

var hour = +prompt("Enter a number") 
if (hour < 18) { 
    alert("Good day")
}else {
alert("Good evening") 
}

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements 
var time = +prompt("Enter time in 24-hour clock format (e.g., 1900 for 7 PM):");
if(time >= 0 && time < 1200){
    alert("Good Morning!")
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!")
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening!")
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night!")
} else {
    alert("Invalid time input. Please enter a valid time in 24-hour format.")
}

