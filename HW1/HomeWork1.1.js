alert("Calculator");
var  a;
var  b;
a = prompt("Enter value first variable");
b = prompt("Enter value second variable");
var c;
c = prompt("Enter operations what your need [1)*,2)+,3)-,4)/]");
if(c<1 || c>4){
    alert("Enter right digits!!!")
}else if(c == 1){
    alert("a*b=" + (Number(a)*Number(b)));
}
else if(c == 2){
    alert("a+b=" + (Number(a)+Number(b)));
}
else if(c == 3){
    alert("a-b=" + (Number(a)-Number(b)));
}
else if (c == 4) {
    alert("a/b=" + (Number(a)/Number(b)));
}else {
    alert("You enter some wrong!")
}
