var input = document.getElementById("input_id");
var button = document.getElementById("btn_id");
var text = document.getElementById("teksti");

button.onclick = function(){
    text.innerHTML = input.value;
}



 var texti1 = "Digital school is the best school"

var regex = /[abc]/g;

document.getElementById("result").innerHTML=texti1.match(regex);

function validation(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;


    var regex_name =/^[a-zA-Z]+$/;
    var regex_age =/^[0-9]+$/;
    var regex_email= /^[a-zA-Z0-9._!]+@[a-zA-Z]+.[a-zA-Z]+$/

    if(!(name.match(regex_name)) || !age.match(regex_age) || !(email.match(regex_email))){
        if(!(name.match(regex_name))){
            document.getElementById("name_error").style.visibility = "visible";

        }else{
               document.getElementById("name_error").style.visibility = "hidden";
        }
        if(!(age.match(regex_age))){
            document.getElementById("age_error").style.visibility = "visible";

        }else{
               document.getElementById("age_error").style.visibility = "hidden";
        }
        if(!(email.match(regex_email))){
            document.getElementById("email_error").style.visibility = "visible";

        }else{
               document.getElementById("email_error").style.visibility = "hidden";
        }
        
        return false;
    }else{
        document.getElementById("name_error").style.visibility = "hidden";
        document.getElementById("age_error").style.visibility = "hidden";
        document.getElementById("email_error").style.visibility= "hidden";
        return true;
    }

}



