/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const areaOfRectangle= function (l1,l2) {
    const result = l1*l2
    return result
}
//console.log(areaOfRectangle(2,5))

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function (int1,int2) {
    const result = int1+int2
    return result
}
//console.log(crazySum(5,10))


/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff = function (num1) {
    const difference = (num1-19)
    if(difference>19){
        const result = difference*difference*difference
        return result
    }
    else{
        return difference
    }
}
//console.log(crazyDiff(40))

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
const boundary = function(n) {
    if ((n>20 && n<=100) || n===400)
    return true
    else(False)
}
//console.log(boundary(23))



/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function(x) {
    if (x==="Strive"){
        return x
    }
    else{
        
        const myString="strive " + x
        return myString
    }
}
//console.log(strivify("School"))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function(x){
    if(x%3 ===0){
        return `${x} is the multiple of 3`
    }else if(x%7 ===0){
        return `${x} is the multiple of 7`
    }
    else{
        return `${x} is not a multiple of neather 3 nor 7`
    }
}

console.log(check3and7(21))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
function reverseString(s){
    return [...s].reverse().join("");
}
//console.log(reverseString("reverseString"))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(words) {
    const separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].substring(1);
    }
    return separateWord.join(' ');
 }
 //console.log(upperFirst("my name is dilmurod"));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

function cutString(str) {
    return str.substring(1, str.length - 1);
  }
  //console.log(cutString('Dilmurod'));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
var random = items[Math.floor(Math.random()*items.length)]
