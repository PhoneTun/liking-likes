var count=9
var count1=12
var count2=9
var countElement1=document.querySelector(".c1");
var countElement2=document.querySelector(".c2");
var countElement3=document.querySelector(".c3");

console.log(countElement1);

function add1() {
    count++;
    countElement1.innerText = count + " like(s)";
    console.log(count)
}
function add2() {
    count1++;
    countElement2.innerText = count1 + " like(s)";
    console.log(count1)
}
function add3() {
    count2++;
    countElement3.innerText = count2 + " like(s)";
    console.log(count2)
}


// function add(){
//     var x=parseInt(document.querySelector("h6").innerText);
//     x++;
//     document.querySelector("h6").innerText=x;
//     console.log(x);
// }
