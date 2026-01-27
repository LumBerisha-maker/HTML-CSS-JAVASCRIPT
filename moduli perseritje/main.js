// function newAlert(){
//     alert("this message is inside the function");
// }

// newAlert();



var button1 = document.getElementById("button1");

button1.onmousewheel = function(){
    alert("hello from lumi");
}



var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");
var text = document.getElementById("text");


btn.onmousewheel = function(){
  text.style.cssText = " text-align:center; color:red; background:lightblue; padding:200px;";
}



btn1.onclick = function(){
  text.style.cssText = "display: none;";
}




var input1 = document.getElementById("input1");
var btn3 = document.getElementById("btn3");
var text = document.getElementById("answer");

// btn3.onclick = function(){
//     if(input1.value > 10){
//       text.innerHTML = "the input value is higher then 10";
//     }
//       else if(input1.value == 10){
//      text.innerHTML = "the input value is the same  10";
//     }
//     else{
//        text.innerHTML = "it is smaller then 10";
//     }
// }

btn3.onmousewheel = function(){

  if(input1.value >= 18){
    text.innerHTML = "You can use this website"
  }
    if(input1.value < 18){
    text.innerHTML = "You can't use this website"
  }


}


