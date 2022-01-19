function validateUserName()
{
   var valUsrNme=document.getElementById("username").value;
    var valUsrErr=document.getElementById("usrerror");
    var regExp=/^[a-zA-Z0-9\.]+$/;
        if(regExp.test(valUsrNme))
        {
            valUsrErr.innerHTML= valUsrNme+"&nbsp is  valid username";
            valUsrErr.style.color="green";
            valUsrErr.style.fontSize="12px";

            return true;    
        }
        else{
            valUsrErr.innerHTML= valUsrNme+"&nbsp is not  valid username";
            valUsrErr.style.color="red";
            valUsrErr.style.fontSize="12px";
            return false;
        }

}







// email id
function validateEmail()
{
   var valEmail=document.getElementById("email").value;
    var valError=document.getElementById("errorEmail");
    console.log(valEmail);
    let regExp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
        if(regExp.test(valEmail))
        {
            valError.innerHTML= valEmail+"&nbsp is valid Email Address";
            valError.style.color="green";
            valError.style.fontSize="12px";

            return true;    
        }
        else{
            valError.innerHTML="Email format should be in sample@domain.com";
            valError.style.color="red";
            valError.style.fontSize="12px";
            return false;
        }

}


// Password
function validatePassword()
{
   var valPswd=document.getElementById("password").value;
    var valPsdErr=document.getElementById("errorPswd");
    let strongPswd=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let mediumPswd=((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/)||(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/));
        if(strongPswd.test(valPswd))
        {
            valPsdErr.innerHTML= "Strong Password"
            valPsdErr.style.color="white";
            // valPsdErr.style.textAlign="center";
            valPsdErr.style.backgroundColor="green";
            valPsdErr.style.fontSize="17px";
            return true;    
        }
        else  if(mediumPswd.test(valPswd))
        {

            valPsdErr.innerHTML= "Medium Password"
            valPsdErr.style.color="white";
            // valPsdErr.style.textAlign="center";
            valPsdErr.style.backgroundColor="Orange";
            valPsdErr.style.fontSize="17px";
            return true;   
        }
        else{
            valPsdErr.innerHTML= "Week Password"
            valPsdErr.style.color="white";
            // valPsdErr.style.textAlign="center";
            valPsdErr.style.backgroundColor="red";
            valPsdErr.style.fontSize="17px";
            return false;
        }

}

// Phone Number
function validatePhoneNumber() 
{
   var valPhno=document.getElementById("phno").value;
   console.log(valPhno);
    var valPhnoErr=document.getElementById("errorPhNo");
    let phNoregExp=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(phNoregExp.test(valPhno))
        {
            valPhnoErr.innerHTML= valPhno+"&nbsp is valid";
            valPhnoErr.style.color="green";
            valPhnoErr.style.fontSize="12px";

            return true;    
        }
        else{
            valPhnoErr.innerHTML="Phone Number should be [ XXX-XXX-XXXX or XXX.XXX.XXXX or XXX XXX XXXX ]"
            valPhnoErr.style.color="red";
            valPhnoErr.style.fontSize="12px";
            return false;
        }

}