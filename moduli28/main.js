var button1 = document. getElementById ("button1");

button1.onclick = function(){

    alert("hello")
}
var button2 = document.querySelector ("#button2");
var button3 = document.querySelector ("#button3");
var button4 = document.querySelector ("#button4");
var button5 = document.querySelector ("#button5");


var button2 = document.querySelector ("#button2");
button2.addEventListener( 'click', function(){

  alert ("id button2")

});

button3.onmouseover = function(){
    alert("hover")
}


button4.onmouseleave =function(){
    alert("on mouse im lumi")
}


button5.onmousewheel = function(){
    alert("haahah ge scammed")
}

var btn1 = document. getElementById ("btn1");
var btn2 = document. getElementById ("btn2");
var txt1 = document. getElementById  ("txt1")
var txt2=document.getElementById("txt3")

btn1.onclick = function (){
      
    txt1.style.color="red"
    txt1.style.backgroundColor="grey"
    txt1.style.textAlign="Center"
    txt1.style.fontSize="150px"
    txt2.setAttribute("class","txt2")
}


       this.setAttribute("class","txt2")

