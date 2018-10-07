var name;
var age;

name = prompt("What is your name?");
age = prompt("How old are you?");

if(age > 0 && age < 120){
    alert("Hi," + " " + name + " " + "your age is" + " " + age );
}else{
    alert("Enter correct age!");
}