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

    var regex_name =/^[a-zA-Z]+$/;
    var regex_age =/^[0-9]+$/;

    if(!(name.match(regex_name)) || !age.match(regex_age)){
        if(!(name.match(regex_name))){
            document.getElementById("name_error").style.visibility = "visible";

        }else{
               document.getElementById("name_error").style.visibility = "hidden";
        }
    }

    
    if(!(age.match(regex_age)) || !age.match(regex_age)){
        if(!(name.match(regex_name))){
            document.getElementById("age_error").style.visibility = "visible";

        }else{
               document.getElementById("age_error").style.visibility = "hidden";
        }
        return false;
    }else{
        document.getElementById("name_error").style.visibility = "hidden";
        document.getElementById("age_error").style.visibility = "hidden";
        return true;
    }

}



