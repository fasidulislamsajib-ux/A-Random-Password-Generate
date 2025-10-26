function generatePassword() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  
  const length = 15; // password er length

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  document.getElementById("password").value = password;
}
//function part
function copyPassword() {
  const passwordField = document.getElementById("password");
  
  if (passwordField.value) {
    navigator.clipboard.writeText(passwordField.value);
    alert("✅ Password copied to clipboard!");
  } else {
    alert("⚠️ Please generate a password first!");
  }
}

