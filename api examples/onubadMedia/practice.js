// var myBooks = [293, 3883, 382, 20, 39, 399, 100,388, 29, 129]
// for(var i=0; i<myBooks.length; i++){
//     if(myBooks[i] > 200){
//         continue;
//     }
//     console.log (myBooks[i])
// }


// var gradeNumber = 10;
// if(gradeNumber>100 || gradeNumber < 0){
//     console.log("What nonsence you are!");
// }
// else if(gradeNumber<=100 && gradeNumber >= 80){
//     console.log("A+");
// }
// else if(gradeNumber<=79 && gradeNumber >= 70){
//     console.log("A");
// }
// else if(gradeNumber<=69 && gradeNumber >= 60){
//     console.log("A-");
// }
// else if(gradeNumber<=59 && gradeNumber >= 50){
//     console.log("B");
// }
// else if(gradeNumber<=49 && gradeNumber >= 40){
//     console.log("C");
// }
// else if(gradeNumber<=39 && gradeNumber >= 33){
//     console.log("D");
// }
// else{
//     console.log("F");
// }

//                    task 2.....................

// var inputNumber = 100;d
// if(inputNumber % 2 == 0){
//     console.log("Your number is even");
// }
// else{
//     console.log("Your number is odd");
// }

//                     task 3......................

// var numbersArray = [20,15,3,9,2,11,5,14,13,19,6,1,4,7,18,12,8,16,10,17]
// for(var i=0; i<numbersArray.length; i++){
//     console.log(numbersArray[i]);
// } 


// let numbers = [5, 2, 8, 10, 1, 18, 16, 14, 3, 7, 12, 4, 11, 19, 6, 9, 15, 20, 17, 13];

// // সংখ্যাগুলি সাজানোর জন্য একটি লুপ চালানো
// for (let i = 0; i < numbers.length; i++) {

//     // সংখ্যাগুলি একসাথে সাজানোর জন্য আরেকটি লুপ চালানো
//     for (let j = i+1; j < numbers.length; j++) {
        
//         // যদি একটি সংখ্যা অন্যটির চেয়ে ছোট হয়, তাহলে তাদের স্থান পরিবর্তন করা হবে
//         if (numbers[i] > numbers[j]) {
//             let temp = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = temp;
//         }
//     }
// }

// console.log(numbers);


//                       task-4

// var year = 2032;
// if(year%4 == 0){
//     console.log("leap year");
//     }
// else{
//     console.log("Not Leap Year");
// }

//                   task-5

// for(var i=0; i<=50; i++){
//     if(i%5 == 0 && i%3 == 0){
//         console.log(i);
//     }
// }

//                       task-6

// var friends = ["rahim", "karim", "abdul", "sadadRahman", "heroAlom"];
// var largeFriendNameIs = [""]
// for(var i=0; i<friends.length; i++){
// var temporyName = friends[i]
// if(temporyName.length > largeFriendNameIs.length){
//     largeFriendNameIs = temporyName;
//     }
// }
// console.log(largeFriendNameIs);

//                      task-7

// Find the biggest number in this arrary
// var numbers = [101, 22, 33, 33, 44, 44, 55, 66, 77, 88, 99, 100];
// var max = numbers[0];
// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//         }
//         }
//         console.log(max);

// skip the duplicates numbers from the array. and print unique numbers
// var numbers = [101, 22, 33, 33, 44, 44, 55, 66, 77, 88, 99, 100];
// var unique = [];
// for (var i = 0; i < numbers.length; i++) {
//     if (unique.indexOf(numbers[i]) == -1) {
//         unique.push(numbers[i]);
//         }
//         }
//         console.log(unique);


/* write a function called foo() which prints "foo" and a function called bar() which prints "bar". call function bar() in the foo() function after printing. what will be the output? Now call the foo() to see the output. */

                        //   practice task module 20
                        // task 1
// function foo(){
//     console.log("foo");
//     bar();
// }
// function bar(){
//     console.log("bar");
// }
// foo();

//                         task 2
// white a function called make_avg() which will take an array of integers and return the average of those values


// function make_avg(){
//     var number1 = 44;
//     var number2 = 55;
//     var number3 = 66;
//     var sum = number1 + number2 + number3;
//     var avg = sum / 3;
//     console.log(avg);

// }
// make_avg();


                            //  task 3
// Challenging: Write a function called make_avg() which will take an array of integers and the sixe of that array and return the average of those values
// function make_avg(){

//     var arr = [44,55,66,77,88,99];
//     var sum = 0;

//     for(var i=0; i<arr.length; i++){

//         // console.log(arr[i]);

//         sum = sum + arr[i];

//     }
//     // console.log(arr.length);
//     // console.log(sum);
//     var average = sum / arr.length

//     console.log(average);
// }
// make_avg();


                        //    task 4
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways.
// has return + has parameter
// No return + has parameter

// function odd_even(number){
//     if(number%2 == 0){
//         console.log("even");
//     }
//     else
//     console.log("odd");
// }
// // var 
// // result = 
// odd_even(10)
// // console.log(result);

//                         task 5
/*
you aare in a hurry to fo to your school on TimeRanges. But when you are crossing the road , the trafic signal is red coloured.
In this situation if you try to cross the road, you maybe in danger. If you notice a yellow coloured traffic signal, you should stop.
If you notice a green coloured traffic signal, you should cross the road. So write a JS code, where there is a variable called Signal.
It's Value can be green, yellow or red & we will get different activities as output depending on the variable. So, hurry up.
 */
// make with if else conditionals

// var signal = "green"
// if(signal == "red"){
//     console.log("stop");
// }
// else if(signal == "yellow"){
//     console.log("Don't cross right now");
// }
// else{
//     console.log("cross right now");
// }

// try it with switch conditional
// var signal = "green"
// switch(signal){
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("Don't cross right now");
//         break;
//     default:
//         console.log("Corss right now");
// }



//  write a function where print 13 er namta
// function namta(){
//     for(var i=1; i<11; i++)
//     console.log(i*13);
// }
// namta()



//  transfer to lowercase
// function toUpperCase(){
//     var myNameIs = "TAREKUL ISLAM RIFAT"
//     // return myNameIs.toLowerCase;
//     var lowercase = myNameIs.toLowerCase();
//     console.log(lowercase);

// }
// toUpperCase()
// console.log(toUpperCase());


// perameter is my first and last name . and output will be full name

// function fullName(firstName, LastName){
//     var fullName = firstName + " " + LastName;
//     return fullName;
// }
// var full_name = fullName("Tarekul Islam", "Rifat")
// console.log(full_name);


// write a function which make square a number

// function square(number){
//     return number*number;
// }
// var result = square(3)
// console.log(result);


// write a function name pizza and follow this

// const pizza = {
//     topping: ["cheese", "sauce", "peperoni"],
//     crust:"deep dish",
//     serves:2
// }
// var result = pizza.topping[2]
// console.log(result);


// write a function which convert inch to feet

// function inchToFeet(inch){
//     var sum = inch / 12;
//     return sum;
// }
// var inputInch = inchToFeet(72);
// console.log(inputInch);



// write a function which make miles to kilometer

// function milesToKilometer(miles){
//     var sum = miles * 1.6;
//     return sum;
// }
// var imputMiles = milesToKilometer(2)
// console.log(imputMiles);



// write a function and check a number is odd or even

// function odd_even(number){
//     if(number%2 == 0){
//         return "even";
//     }
//     else{
//         return "odd"
//     }
// }
// var number = odd_even(094);
// console.log(number);


// write a function which check this number is odd or even

// function leepYear(year){
//     if(year%4 == 0){
//         return "This is a leap year"
//     }
//     else{
//         return "This is not a leap year"
//     }
// }
// var year = leepYear(2024);
// console.log(year);



// write a function and calculate all numbers of this array

// function numbers(myNumbers){
//     var sum = 0;
//     for(var i=0; i<number.length; i++){
        
//         var index = i;
        
//         var arrayNumbers = number[index]
//         sum = sum + arrayNumbers;

//         // return arrayNumbers;
//     }
//     console.log(sum)
// }

// var number = [11,22,33,44,55,66,77,88,99]
// var numberIs = numbers(number)

// console.log(numberIs);



// get odd numbers of an array and get odd sum of an array

// function odd_num(number){

//     var sum = 0;

//     for(var i=0; i<numbers.length; i++){
//         var index = i;
//         var arrayIndex = numbers[index]
//         // console.log(arrayIndex);
//         if(arrayIndex%2 != 0){
//             sum = sum + arrayIndex;
//         }
//     }
//     console.log(sum);

// }
// var numbers = [11,22,33,44,55,66,77,88,99]
// var odd_num = odd_num(numbers)



// factorial with reverse for loop
// function factorial(number){
//     var sum = 1;
//     for(var i=number; i>0; i--){
//         var  index = i;
//         // var indexSum = number[index];
//         // return indexSum;
//         var sum = sum * index;
//     }
//     return sum;
// }
// const result = factorial(9);
// console.log(result);



// write a  function that will take hour as the input perameter and will convert it into minutes and will return the result in minutes.

// function makeMinutes(hours){
//     var minutes = hours * 60;
//     return minutes;
// }
// var hour = 9;
// var minutes = makeMinutes(hour);
// console.log(minutes);



/* write a function findLeapYear() that will take the array [2023, 2024, 2025, 2028, 2030] as the input parameter
and will check if each year is a leap year. if a year is a leap year insert that year in a new array, return the new
array and print the result */

// function findLeapYear(){
//     var newArray = []
//     for(var i=0; i<years.length; i++){
//         var index = i;
//         var arrayIndex = years[index]
//         // console.log(arrayIndex);
//         if(arrayIndex%4 === 0){
//             newArray.push(arrayIndex);
//         }

//     }
//     console.log(newArray);
// }
// var years = [2023, 2024, 2025, 2028, 2030]
// findLeapYear();




// function days(stay){
//     if(stay<=10){
//         var youBillIs = stay * 500;
//         return youBillIs;
//     }
//     else if(stay>10 && stay<=20){
//         var first10Days = 500 * 10;
//         var remainingDays = stay - 10;
//         var nextDaysBill = remainingDays * 300;
//         var youBillIs = first10Days + nextDaysBill;
//         return youBillIs;
//     }
//     else{
//         var first10Days = 500 * 10;
//         var second20Days = 300 * 10;
//         var remainingDays = stay - 20;
//         var nextDaysBill = remainingDays * 100;
//         var youBillIs = first10Days + second20Days + nextDaysBill;
//         return youBillIs;

//     }
// }

// console.log(days(75));


// write a function that will take 3 numbers will return the max number
// first time do it using if-else

// function numbers(num1, num2, num3){
//     if(num1>num2 && num1 > num3){
//         console.log("Maximum number is: " + num1);
//     }
//     else if(num2>num1 && num2 > num3){
//         console.log("Maximum number is: " + num2);
//     }
//     else{
//         console.log("Maximum number is: "+ num3);
//     }
// }
// var inputNumbers = numbers(1111, 222, 33)



// write a function that will take 3 numbers will return the max number
// second time do it using Math.max or Math.min

// function numbers(num1, num2, num3){
//     let max = Math.max(num1, num2, num3)
//     console.log(max);
// }
// var inputNumbers = numbers(1111, 222, 33)




// find the maximum number in an array

// function maxInArray(numbers){
//     let max = numbers[0];
//     for(let i=0; i<numbers.length; i++){
//         let loopNumber = numbers[i]
//         if(loopNumber > max){
//             max = loopNumber
//             }
//     }
//     return max;
// }

// const height = [11,22,33,44,55,66,77,88,99];
// const tallest = maxInArray(height)
// console.log("Tallest person is: " + tallest);




// reverse a string and reverse words in a sentece

// function reverseString(text){

//     let reversed = text.split(" ").reverse().join(" ");
//     return reversed;
// }



// find prime number

// function primeNumber(number){
//     if(number > 1){
//         for(let i=2; i<number; i++){
//             // console.log(i);
//             if(number % i === 0){
//                 return false;
//             }
//             else{
//                 return true;
//             }
//         }
//     }
//     else if(number == 1){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// // primeNumber(7)
// console.log(primeNumber(9));




// প্রাইম সংখ্যা চেক করার ফাংশন
// function isPrime(number) {
//     if (number <= 1) {
//       return false;
//     }
  
//     // ২ থেকে (সংখ্যার বর্গমূল) পর্যন্ত পর্যাপ্ত সংখ্যক দিয়ে ভাগ করে দেখা হচ্ছে
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   // নির্দিষ্ট রেঞ্জের সব প্রাইম সংখ্যা রিটার্ন করার ফাংশন
//   function getPrimeNumbers(start, end) {
//     const primes = [];
  
//     for (let number = start; number <= end; number++) {
//       if (isPrime(number)) {
//         primes.push(number);
//       }
//     }
  
//     return primes;
//   }
  
//   // ফাংশনগুলির পরীক্ষা
//   const numberToCheck = 29;
//   console.log()
  



// write a function to take a array of numbers and return the গড় from this function

// function myArray(numbers){
//   let sum = 0;
//   var length = numbers.length;
//   for(let i=0; i<length; i++){
//     let arrayIndex = numbers[i];
//     sum = sum + arrayIndex;
//   }
//   return sum / length;
// }
// // console.log(sum);

// const numbersOfArray = [11, 22, 33, 44, 55, 66, 77, 88, 99]
// const print = myArray(numbersOfArray);
// console.log(print);



// write a function who take input parameter length and wide and return the area of this rectngle

// function inputPerameter(height, wide){
//   return height * wide;
// }



// let deleteFirstMaximumNumber = Math.max(...numbers);
// let fixedNumbers = numbers.pop(deleteFirstMaximumNumber)
// console.log(fixedNumbers);

// for(let i=0; i<numbers.length; i++){
//   let arrayIndex = numbers[i];
//   // console.log(arrayIndex);
//   let maximumInNumbersArray = Math.max(arrayIndex);
//   console.log(maximumInNumbersArray);
// }



// find second largest number in a array

// const myArray = [101, 22, 33, 44, 77, 909, 88, 66, 55]
// const findMax = Math.max(...myArray)
// const afterFilter = myArray.filter(i => i !== findMax)
// const findSecondMax = Math.max(...afterFilter)
// console.log(findSecondMax);


// function feetToInch(feet){
//     return feet * 12;
// }
// const inputFeet = feetToInch(7)
// console.log(inputFeet);


// function centimeterToMeter(cm){
//     return cm / 1000;
// }
// const inputFeet = centimeterToMeter(7000)
// console.log(inputFeet);



// let i =7; 
// while(i<20){
//     if(i % 2 === 1){
//         console.log(i);
//     }
//     i++
// }




// let student = {
//     name: "John",
//     age:17,
//     College:"CIC"
// }
// student.name = "Tarekul"
// console.log(student);



// const myArray = [11, 22, 33, 44, 55, 66, 77, 88, 99]

// for(let i=0; i<myArray.length; i++){
//     let arrayIndex = myArray[i]
//     if(arrayIndex > 80){
//         console.log(arrayIndex);
//     }
// }


// const myArray = [11, 22, 33, 44, 55, 66, 77, 88, 99]

// let splitied = myArray.splice(3,4, 45, 46)
// let getOut = myArray.pop()

// console.log(myArray);

// for( let i=0; i<myArray.length; i++){
//     let arrayIndex = myArray[i];
//     // console.log(arrayIndex);
// }
// console.log(myArray.length);




// function bestFriend(friend){
    //     let bestFriendName = friend[0];
    //     let bestFriendNameLength = bestFriendName.length;
        
    //     for(let i=0; i<friend.length; i++){
    //         let arrayIndex = friend[i]
    //         let arrayIndexLength = arrayIndex.length;
            
    //         if(bestFriendNameLength < arrayIndexLength)
    //         bestFriendName = arrayIndex;
    //     };
    //     console.log(bestFriendName);
    // };
    
    
    // const friends = ["Mobashshara Sultana", "Fahim Molla", "Shafidul Islam"]
    // const inputPera = bestFriend(friends)
    // // console.log(inputPera);



// function paperRequirements(book1, book2, book3){
//     const firstBookPages = book1 * 100;
//     const secondBookPages = book2 * 200;
//     const thirdBookPages = book3 * 300;
//     const totalPagesNeed = firstBookPages+secondBookPages+thirdBookPages;
//     console.log(totalPagesNeed);
// }

// paperRequirements(2,2,2)




// const myArray = [11, 22, -3, 44, 0, 66, -7, 88, 99]
// let positiveNumbers = []

// for(let i=0; i<myArray.length; i++){
//     let arrayIndex = myArray[i]
//     if(arrayIndex >= 0){
//         positiveNumbers.push(arrayIndex)
//     }
//     else{
//         continue;
//     }
// }
// console.log(positiveNumbers);



// function sum(number){
//     sum = 0
//     for(let i=0; i<=number; i++){
//         sum = sum + i
//     }
//     console.log(sum);
// }
// const inputNumber = sum(100)



// for(let i=1; i<=10; i++){
//     let namta = i * 3;
//     console.log(namta);
// }




// function countGreaterThan5(myArray){
//     let newArray = []
//     for(let i=0; i<myArray.length; i++){
//         let arrayIndex = myArray[i]
//         if(arrayIndex>5){
//             newArray.push(arrayIndex)

//         }
//         // console.log(i);
//     }
//     console.log(newArray.length);
// }

// const myArrays = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10]
// countGreaterThan5(myArrays)



// তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।

// function friends(name1, name2){
//     let nameLength = name1.length;
//     let name2Length = name2.length;
//     if(nameLength > name2Length){
//         return name1.split('').reverse().join('');
//     }
//     else{
//         return name2.split('').reverse().join('');
//     }
// }
// let input = friends("Mobashshara", "Fahim")
// console.log(input);



// এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে।

// function volume(milimeter){
//     return milimeter / 1000;
// }
// const inputNumber = volume(1000);
// console.log(inputNumber)




/* একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা।*/
// function smallPerson(object){
//     let smallestage = object[0].age;
//     let smallestName = object[0].name;
//     for(let i=0; i<object.length; i++){
//         let arrayIndex = object[i]
//         let theirAge = arrayIndex.age;
//         if(theirAge < smallestage){
//             smallestage = theirAge;
//             smallestName = arrayIndex.name;
//         }
//     }
//     console.log(smallestName);
// }
// const arrayOfObject = [
//     {name:'sakib', age:30},
//     {name:'samiul', age:20},
//     {name:'sahid', age:50},
//     {name:'samin', age:10}
// ]
// const input = smallPerson(arrayOfObject)






/* ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে। */

// function radianToDegree(radian){
//     return radian*(180/3.1416);
// }
// console.log(radianToDegree(25));




/* ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । */

// function isJavaScriptFile(string){
//     if(string.endsWith(".js") === true){
//         return true;
//     }
//     else{
//         return false;
//     }
//     // var edingCheck = string.endsWith(".js")
// }
// const input = isJavaScriptFile("image.jpg.js")
// console.log(input);




/* 
ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।



প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
প্রতি লিটার পেট্রোল এর দাম – 130 টাকা
প্রতি লিটার অকটেনের এর দাম – 135 টাকা

এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের  অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে  হলো সেই সংখ্যা রিটার্ন করতে হবে। */

// function oilPrice(dijel, petrol, octen){
//     const dijelPrice = dijel * 114;
//     const petrolPrice = petrol * 130;
//     const octenPrice = octen * 135;
//     const totalPrice = dijelPrice + petrolPrice + octenPrice;
//     return totalPrice;
// }

// const input = oilPrice(30, 20, 10)
// console.log(input);




 /* তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি  প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি  বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে । */

// function isBestFriend(friend1){
//     const f1Name = friend1.name;
//     const f2Name = friend2.name;
//     const f1Friend = friend1.friend;
//     const f2Friend = friend2.friend;
//     if(f1Name === f2Friend && f2Name === f1Friend){
//         console.log("They are BestFriends");
//     }
//     else{
//         console.log("They are not BestFriends");
//     }
// }
// const friend1 = 
// { name: "doe", friend: "alex" }
// const friend2 = { name: "john", friend: "doe" }
// isBestFriend(friend1, friend2)



/* একটি বড় সংখ্যাক মানুষজন(৫০ বা তার বেশি) পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো  আমাদের বাস ও মাইক্রো আছে ।প্রতিটি  বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে।মাইক্রবাসে ১১ জনের কম হলে মাইক্রবাসে যাওয়া যাবে না।  এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে  একটা সংখ্যা (কতজন যাবে )   নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে ।
উদাহরণ১ঃ
 যদি ১১৭ জন মানুষ পিকনিকে  যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।
উদাহরণ২ঃ
 যদি ২৩৫ জন মানুষ পিকনিকে  যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে। */

// function publicBusFare(peoples){
//     const extraPeoplesfb = peoples % 50;
//     const extraPeoplesfm = extraPeoplesfb % 11;
//     if(extraPeoplesfb < 50){
//         if(extraPeoplesfm < 11){
            
//             return extraPeoplesfm * 250;
//         }
//         else{
//             return peoples * 250;
//         }
//     }
// }
// // publicBusFare(60);

// console.log(publicBusFare(117));



// write a function named leap year. and take a year and check this. if year is a leap year return true and false for not a leap year

// function leapYear(year){
//     if(year % 4 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// var year = 2024;
// var result = leapYear(year)
// console.log(result);



// check your age is odd or even by a function. if number is true then return true else false
// function leapYear(age){
//     if(age % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// var age = 18;
// var result = leapYear(age)
// console.log(result);



// write a function where you give hour as a parameter and it will return minutes
// function hours(hour){
//     return hour * 60;
// }
// var hour = 1;
// var result = hours(hour)
// console.log(result);



// object practice
// var student = {
//         name : "Ahmed",  
//         age : 20,
//         gender : "male",
//         profession : "Web Debeloper"
// }
// var objectName = Object.keys(student)



// if ProblemSolved == True        try_new_problem()
// while ProblemSolved == False:
//         try_again()
//         be_awesome()


// Find the biggest number in this arrary
// var numbers = [101, 22, 33, 33, 44, 44, 55, 66, 77, 88, 99, 100];
// var max = numbers[0];
// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//         }
//         }
//         console.log(max);


// var duplicates = []
// var compare = numbers[0]
// for(let i=0; i<numbers.length; i++){
//     var index = i
//     var numbersIndex = numbers[index]
//     if(compare == numbersIndex){
    //         duplicates.push(numbersIndex)
    //     }
    //     console.log(numbersIndex);
    // }
    // console.log(duplicates);



    
    // find the duplicates numbers in this array

// var numbers = [101, 22, 33, 33, 44, 44, 55, 66, 77, 88, 99, 100];

// var duplicates = []

// for( var i=0; i<numbers.length; i++){
//     var index = i
//     var numbersIndex = numbers[index]
//     if(numbersIndex == numbers[i+1]){
//         duplicates.push(numbersIndex)
//         }
// }

// console.log(duplicates);


// sort numbers in a array
// var numbers = [101, 22, 33, 33, 44,55, 66, 77, 44, 88, 99, 100];
// var duplicates = []
// for( var i=0; i<numbers.length; i++){
//     var index = i
//     var numbersIndex = numbers[index]
//     if(numbersIndex == numbers[i+1]){
//         duplicates.push(numbersIndex)
//         }
//         }
//         console.log(duplicates);

// var  totalCost =[{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200}, { name: 'Fresh Sugar', price:300} ];
// // console.log(totalCost.keys);
// console.log("hi");

