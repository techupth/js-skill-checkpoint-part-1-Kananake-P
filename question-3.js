// Question #3
let userPassword = "";

function checkPasswordStrength(userPassword) {
  if (userPassword.length < 6) {
    return "Weak";
  } else if (userPassword.length >= 6 && userPassword.length <= 10) {
    return "Medium";
  } else if (userPassword.length > 10) {
    return "Strong";
  }
}

userPassword = "swnalWadqQA";
console.log(checkPasswordStrength(userPassword)); // "Strong"

userPassword = "TechUp";
console.log(checkPasswordStrength(userPassword)); // "Medium"

userPassword = "abcde";
console.log(checkPasswordStrength(userPassword)); // "Weak"
