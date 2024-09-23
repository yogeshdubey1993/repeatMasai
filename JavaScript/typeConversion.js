// function convertToNumber(value, secondValue){
// let result = Number(secondValue);
// console.log(result);
// }
// convertToNumber("10", "20.5");

// function convertToString(value, secondValue){
//     let result = String(secondValue);
//     console.log(result);
//     console.log(typeof(result));
//     }
//     convertToString(10, 20.5);


// function convertAndCompare(value, secondValue){
//     let result = Number(secondValue);
//     if(value === result)
//         console.log("true");
//     else
//     console.log("false");
//     }
//     convertAndCompare(10, "10");


// function checkCoersion(a, b) {
//     if (a == b)
//         console.log("true");
//     else
//         console.log("false");

//     if (a === b)
//         console.log("true");
//     else
//         console.log("false");
// }
// checkCoersion(5, "5");
// checkCoersion(null, undefined);
// checkCoersion(false, 0);


// function coerseInAirthmetic(a, b) {
//    let add = a + b;
//    console.log(add);
//    let multiply = a * b;
//    console.log(multiply);
//    let divide = a / b;
//    console.log(divide);
// }
// coerseInAirthmetic(5, "5");
// coerseInAirthmetic(5, 5);


// function coerseInConditionals(a) {
//         if (a)
//             console.log("true");
//         else
//             console.log("false");
//     }
//     coerseInConditionals(0);
//     coerseInConditionals(5);


// function identifyType(a) {
//     console.log(typeof(a));
// }
// identifyType(5);
// identifyType("5");
// identifyType({});
// identifyType([]);
// identifyType(true);
// identifyType(identifyType);



// function isArrayOrObject(value) {
//     console.log(typeof(value));
//     console.log(Array.isArray(value));
// }
// isArrayOrObject([1,2,3,4,5]);



// function identifyComplexType(value) {
//     console.log(typeof(value));
//     console.log(Array.isArray(value));
// }
// const identify = new identifyComplexType([1,2,3,4,5]);
// console.log(identify instanceof identifyComplexType);



// for loop doing a task that given by user where can be a condition apply(its a statement)
// for(let i=0; i<2; i++){
//     console.log(i);
// }
// expression only done result without define any condition
// console.log(2+2);



// function expressInFunction(a, b){
//     if(a,b)
//         result = a+b;
//     console.log(result);
// }
// expressInFunction(1, 2);


// function complexExpression(a, b, c){
//     if(a,b)
//      addition = a + b;
//     console.log(addition);
//     multiplication = c * b;
// console.log(multiplication);
// }
// complexExpression(1, 2, 3);




// let runForLoop = (num) => {
// for(let i=num; i<=10; i++){
//     console.log(i);
// }
// }
// runForLoop(1);


// let printArrayElements = (arr) => {
//     for(let i=0; i<arr.length; i++){
//         console.log(arr[i]);
//     }
//     }
//     printArrayElements(['yug','yogesh','susmita','juhi']);



// function createMultiplicationTable(n){

// for (let i = 0; i < n.length; i++) {
//     for (let j = 0; j < n[i].length; j++) {
//         console.log(n[i][j]*2);
//     }
// }
// }
// createMultiplicationTable([[1,2,3],[4,5,6],[7,8,9,10]]);


// let getDaysOfWeek = (dayNumber) => {
// switch(dayNumber){
//     case 1 : 
//     text = console.log("Monday");
//     break;
//     case 2 : 
//     text = console.log('Tuesday');
//     break;
//     case 3 : 
//     text = console.log('Wednesday');
//     break;
//     case 4 : 
//     text = console.log('Thursday');
//     break;
//     case 5 : 
//     text = console.log('Friday');
//     break;
//     case 6 : 
//     text = console.log('Saturday');
//     break;
//     case 7 : 
//     text = console.log('Sunday');
//     break;
//     default : 
//     text = console.log('Looking forward to the weekend');
// }
// }
// getDaysOfWeek(7);


// let getDaysOfWeek = (dayNumber) => {
//     switch(dayNumber){
//         case 1 : 
//         text = console.log("Monday");
//         break;
//         case 2 : 
//         text = console.log('Tuesday');
//         break;
//         case 3 : 
//         text = console.log('Wednesday');
//         break;
//         case 4 : 
//         text = console.log('Thursday');
//         break;
//         case 5 : 
//         text = console.log('Friday');
//         break;
//         case 6 :
//         case 7 : 
//         text = console.log('Weekend');
//         break;
//         default : 
//         text = console.log('Looking forward to the weekend');
//     }
//     }
//     getDaysOfWeek(7);
    


// let i = 1;
// while(i <= 5){
//     console.log(i);
//     i++;
// }




// let countDownFrom = (n) => {
//     while(n > 0){
//         console.log(n);
//         n--;
//     }
// }
// countDownFrom(10);


// let i = 0;
// let findFirstEven = (numbers) => {
//     while (i < numbers.length) {
//         if (numbers[i] % 2 === 0) {
//             console.log(numbers[i]);
//             break;
//         }
//         else if (i === numbers.length) {
//             console.log("No even number found");
//         }
//         else {
//             i++;
//         }
//     }
// }
// findFirstEven([1, 2, 3, 4, 5, 6]);


// let i = 1;
// do{
//     console.log(i);
//     i++;
// }
// while(i <= 5);


// Generate a random number between 1 and 10
// let guessNumber = () => {
// const randomNumber = Math.floor(Math.random() * 10) + 1;
// let guess;
// let attempts = 0;

// do {
//     // Increment the attempt count
//     attempts++;

//     // Check if the guess is too low, too high, or correct
//     if (guess < randomNumber) {
//         console.log("Too low! Try again.");
//         break;
//     } else if (guess > randomNumber) {
//         console.log("Too high! Try again.");
//         break;
//     } else {
//         console.log(`Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`);
//         break;
//     }
// } while (guess !== randomNumber);
// }
// guessNumber();

var numbers = [1,2,3,4,5];
var sum = numbers.filter(function(n){
    return n%2 == 0
});
console.log(sum);