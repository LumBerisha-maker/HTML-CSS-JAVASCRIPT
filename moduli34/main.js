// function printNames(){

//     document.write("Lum");
//     document.write("<br>");
//     setTimeout(function(){
//         document.write("Jora");
//     }, 3000   );
//      document.write("Drin");

// }

// printNames();

var colors = ['red','blue','pink'];

function changeBg(){
    document.querySelector('body').style.background=
    colors[Math.floor(Math.random()*colors.length)];
}

setInterval(changeBg, 1000);

var names= ['Lum','Jora','Drini'];

function changeNames(){
    document.querySelector('p').innerHTML=
    names[Math.floor(Math.random()*names.length)];
}

setInterval(changeNames, 1000);