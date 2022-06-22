let email=document.getElementById('email');
let password=document.getElementById('password');
let message=document.getElementById("erorr");
function log() {
if(email.value.length === 0){
  message.innerHTML = "Please enter your email";
    email.focus();
    return false;
  }
  else if(password.value.length === 0){
  message.innerHTML = "Please enter your password";
    password.focus();
    return false;
  }
  else{
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    window.location.href='./home.html';
    console.log("you logged in");
    // ...
})
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    message.innerHTML=errorMessage;
  });
  }
}