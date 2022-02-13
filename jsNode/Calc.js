// const readline = require("readline-sync");
// //var value = readline.question("enter somthing: \n");
// //console.log(value);
// var welcome = "Welcom to my calculator. I can do simple opperations like add, subtract \n multiply and divide. All I need is the opperation and the values. \n";
// var enter = "Enter your opperation i.e. add, sub, div or mul: \n"
// var enter2 = "Enter a number: \n"
// const add = "add";
// const div = "div";
// const mul = "mul";
// const sub = "sub";
// //function calc
// function calc(num1, num2, opp){
//     var val;
//     if (opp == add){
//         val = num1+num2;
//     }
//     if(opp == div){
//         val = num1/num2;
//     }
//     if(opp == mul){
//         val = num1*num2;
//     }
//     if(opp==sub){
//         val = num1-num2;
//     }
//     return val;
// }
// console.log(welcome);

// var opperation = readline.question(enter);
// var number1 = readline.question(enter2);
// var number2 = readline.question(enter2);
// console.log("The result is: " + calc(number1, number2, opperation)); 
// // const fizzBizz = () =>{
//     for(let i = 0;i<=50 ;i++){
//         if(i%2 === 0){
//             console.log("fizz")
//         }
//         if(i%3 == 0){
//             console.log("bizz")
//         }if (i%3 && i%2 ) {
//             console.log("fizz bizz")            
//         }else{
//             console.log(i)
//         }

//     }
// }
// fizzBizz()
function swap(num1, num2){
    if(num1 > num2){
        var hold = num1
        num1 = num2
        num2 = hold

    }
}
const arr1 = [1,2,4,3]
const arr2 = [8,4,0,3]
function addSort (a1, a2){
    var arr = [...a1, ...a2]
    arr.sort()
    return arr
}
console.log(addSort(arr1,arr2))