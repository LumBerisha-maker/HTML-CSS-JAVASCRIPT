var lumi =5;
if (lumi>2){
   console.log("the number is greater than 2")

}else{
console.log("the number is lower then 6")
}


var input = document.getElementById('input');
var button = document.getElementById('btn');
var text = document.getElementById('text');

button.onclick = function(){
 text.innerHTML = input.value
}


var input1=document.querySelector('#input1');
var input2=document.querySelector('#input2');
var button1=document.querySelector('#btn1');
var result=document.querySelector('#result');

button1.onclick = function(){
 result.innerHTML = parseInt(input1.value) + parseInt(input2.value)
}

