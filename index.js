// code your solution here
function saturdayFun(activity = "roller-skate"){
return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun());
//Defining a function using a function expression
const mondayWork = function (work = "go to the office"){
    return `This Monday, I will ${work}.`
}
console.log(mondayWork("going no where"));
//
(function (){
    console.log("Yet more razzling");
});
//
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
}
console.log(wrapAdjective());
  
  
//Anonymous fucntions passed as callback function
//const button = document.getElementById("button");
//button.addEventListener("click",function (){
//    console.log("Yet more razzling");
//});

const fn = function () {
    console.log("Yet more razzling");
};
fn();

