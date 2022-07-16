// Q1

// function currentDate () {
//     var date = new Date();
//     document.write(date)
// }
// currentDate();


// Q2

// var firstName = prompt("Enter your First Name")
// var lastName = prompt("Enter your Last Name")

// function fullName(firstName, lastName) {
//     alert("Hello, " + firstName + " " + lastName);
// }

// fullName(firstName, lastName)

// Q3

// var firstNumber = +prompt("Enter First Number");
// var secondNumber = +prompt("Enter Second Number");

// function sumOfNumber(firstName, secondNumber) {
//     return firstName + secondNumber;
// }

// var result = sumOfNumber(firstNumber, secondNumber);

// alert(result);

// Q4

// var value = prompt("Enter Calculation");
// for (var i = 0; i < value.length; i++) {
//     if (value.indexOf("+") === i || value.indexOf("-") === i || value.indexOf("*") === i || value.indexOf("/") === i) {
//         var num_1 = value.slice(0, i);
//         var number1 = Number(num_1);
//         var num_2 = value.slice(i + 1);
//         var number2 = Number(num_2)
//         var opt = value[i];
//     }
// }

// function calculator(number1, number2, opt) {
//     var result;
//     var message;
//     if (opt === "+") {
//         result = number1 + number2;
//     } else if (opt === "-") {
//         result = number1 - number2;
//     } else if (opt === "*") {
//         result = number1 * number2;
//     } else if (opt === "/") {
//         result = number1 / number2;
//     }
//     if (result === undefined || isNaN(result)) {
//         message = alert("There is a mistake in Calculation correct format is (Number Operator Number)");
//         return message;
//     }
//     else {
//         message = alert(result);
//         return result;
//     }
// }
// calculator(number1, number2, opt);

// Q5

// var a = +prompt("Enter any Number")

// function squares(a) {
//     var result = a * a;
//     return result;
// }
// alert(squares(a))

// Q6

// function factorial(number) {
//     var answer = 1;
//     if (number == 0 || number == 1) {
//         return answer;
//     } else {
//         for (var i = number; i >= 1; i--) {
//             answer = answer * i;
//         }
//         return answer;
//     }
// }
// var number = +prompt("Enter Number")
// answer = factorial(number)
// alert("The factorial of " + number + " is " + answer)

// Q7

// var number1 = +prompt("Enter Number 1");
// var number2 = +prompt("Enter Number 2");

// function counting(number1, number2) {
//     for (var number1 = number1; number1 <= number2; number1++) {
//         document.write(number1 + "<br />")
//     }

// }
// counting(number1, number2);

// Q8



// Q9

// Part i :-

// function areaOfRectangle(width, height) {
//     var area = width * height;
//     return area;
// }

// var result = areaOfRectangle(9, 10);
// alert(result)

// Part ii :-

// function areaOfRectangle(width, height) {
//     var area = width * height;
//     return area;
// }

// var width = 9;
// var height = 20;

// var result = areaOfRectangle(width,height);
// alert(result);

// Q10

// function palindrome() {
//     var user = prompt("Enter Palindrome word");
//     var flag = "";

//     for (var i = user.length - 1; i >= 0; i--) {
//         flag += user[i];
//     }
//     console.log(flag);
//     console.log(user);
//     if (flag === user) {
//         alert("It is Palindrome")
//     }
//     else {
//         alert("It is not Palindrome")
//     }
// }
// palindrome();

// Q11

// var arr = [];
// function upperCase(user) {
//     var spliting = user.split(" ");
//     for (var i = 0; i < spliting.length; i++) {
//         arr.push(spliting[i].charAt(0).toUpperCase() + spliting[i].slice(1));
//     }
//     return arr.join(" ");
// }
// var user = prompt("Enter your Sentence");
// var result = upperCase(user);
// alert(result);

// Q12

// var arr = [];

// function longestLength(user) {
//     var spliting = user.split(" ");
//     var length = 0;
//     var index;
//     var biggestNumber = 0;
//     console.log(spliting);
//     for (var i = 0; i < spliting.length; i++) {
//         length = spliting[i].length;
//         if (length >= biggestNumber) {
//             biggestNumber = length;
//             index = spliting[i];
//         }
//     }
//     return index;
// }

// var user = prompt("Enter your Sentence");
// var result = longestLength(user);

// document.write("Your sentence was " + user);
// document.write("<br >");
// document.write("Longest word in your Sentence is " + result + " and its length is " + result.length);

// Q13

// var flag1 = false;
// var flag2 = false;
// function occuranceOfGivenNumber(userSentence, userLetterOccurance) {
//     var count = 0;
//     for (var i = 0; i < userSentence.length; i++) {
//         if (userSentence[i] === userLetterOccurance) {
//             count = ++count;
//             flag1 = true
//         }

//     }
//     if (flag1 === false) {
//         alert("There is no occurance of the letter " + userLetterOccurance)
//         flag2 = true;
//     }
//     return count;
// }

// var userSentence = prompt("Give your sentence");
// var userLetterOccurance = prompt("Find the number of occurance of ");

// var result = occuranceOfGivenNumber(userSentence, userLetterOccurance);
// if (flag2 === false) {
//     alert("The number Occurance of " + userLetterOccurance + " is " + result);
// }

// Q14

// function calcCircumference(radius) {
//     var calc = 2 * 3.142 * radius;
//     var result = alert("The circumference is " + calc);
//     return result;
// }

// function calcArea(radius) {
//     var calc = 3.142 * radius * radius;
//     var result = alert("The area is " + calc);
//     return result;
// }

// var radius = prompt("Enter radius of Circle");
// calcCircumference(radius);
// calcArea(radius);





































