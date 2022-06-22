var Name = document.getElementById("name");
var fathername = document.getElementById("fathername");
var email = document.getElementById("email");
var password = document.getElementById("password");
var empty = document.getElementById("erorr");
var CINC = document.getElementById("CINC");
var number = document.getElementById("Number");
var Courses = document.getElementById("Courses");
var qualifying = document.getElementById("qualify")
var laptop=document.getElementById("laptop");
var gender = document.getElementById("Gender");
function sign() {
    if( Name.value.length === 0){
      empty.innerHTML = "Enter your name";
      Name.focus();
      return false;
    }
    else if (fathername.value.length === 0){
      empty.innerHTML = "Please enter your Father name";
       fathername.focus();
       return false;
    }
    else if(email.value.length === 0){
      empty.innerHTML = "Please enter your email";
      email.focus();
      return false;
    }
    else if(password.value.length === 0){
      empty.innerHTML = "Please enter your password";
      password.focus();
      return false;
    }
    else if(CINC.value.length === 0){
      empty.innerHTML = "Please enter your CINC no";
      CINC.focus();
      return false;
    }
  else if(number.value.length === 0){
    empty.innerHTML = "Please enter your number";
    number.focus();
    return false;
  }
  else if(Courses.selectedIndex === 0){
           empty.innerHTML = "Please Select your Course";
           Courses.focus();
           return false;        
  }
  else if(  qualifying.selectedIndex === 0){
    empty.innerHTML = "Please Select your qualification ";
    qualifying.focus();
    return false;        
}
else if(gender.selectedIndex === 0){
  empty.innerHTML = "Please Select your gender ";
  gender.focus();
  return false;        
}
    else{
      if(laptop.checked){
        var obj={
          name:Name.value,
          Fathername:fathername.value,
          Email:email.value,
          Password:password.value,
          CINc:CINC.value,
          Number:number.value,
          course:Courses.value,
          Qualify:qualifying.value,
          Gendeer:gender.value
        }
        console.log(obj);
        let {Email,Password} = obj;
        firebase
        .auth()
        .createUserWithEmailAndPassword(Email,Password)
        .then((success) => {
          console.log(success.user);
          window.location.href='./home.html'
        })
        .catch((error) => {
          let errorMessage= error.message;
          console.log(errorMessage);
          empty.innerHTML=errorMessage;
        });
      
        empty.style.color="yellow";
        empty.innerHTML="Sucessfully signedup";
      }
  }
}
