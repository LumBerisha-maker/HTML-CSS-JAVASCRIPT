function lum (){

   alert("this is inside the function") 
}

lum()

function buna(number1, number2) {

    return number1+number2;

}

console.log(buna(10,10))

function toCelsius (number1){
  return number1*5/9
}

console.log ("54 fahrenheit ="+toCelsius(54)+" celsius")

function drin(){
    var localVar="digitalschool";
   alert(localVar) 
}

drin()

var jora = () => alert("hello im jora");
jora();



function toMinutes (number1){
 return number1*60;
}

console.log ("2 minutes ="+toMinutes(2)+" seconds")

var kerri = {name:"Opel",color:"black",model:"insignia",year:"2023",startEngine: function(){alert("VROMMMPAPAPAP")}
}


var shkolla = {

name:"Brittanica",
students:"1500",
year:"200"
}
console.log (kerri.name)
console.log(kerri.startEngine());

computer.name="Lenovo";
computer.CPU="Inter core i7";
computer.RAM = "16GB";
computer.GPU = "GeFOrec 4080";

computer.type = function{
  return this.name+this.CPU+this.RAM+this.GPU;
};

console.log(computer.type());

computer.name="Lenovo";
computer.cpu="Inter core i7";
computer.ram = "16GB";
computer.gpu = "GeFOrec 4080";

computer.type = function(){
  return this.name+this.cpu+this.ram+this.gpu;
};

console.log(computer.type());