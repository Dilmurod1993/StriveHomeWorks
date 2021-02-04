/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[ 1 , 3, 5] ==> [5 , 3, 1]
*/

let arr1 = [1,3,5];

arr1.reverse();
console.log(arr1);





/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

console.log(Math.max(...arr1));

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

console.log(Math.min(...arr1));

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

for (let i=0;i<arr1.length;i++) {
    if (arr1[i]%2===1) {
        console.log("even values" ,arr1[i])
    }
}

/* EXERCISE 5
Write the code to delete even entries from an array.
*/
for (let i=0;i<arr1.length;i++) {
    if (arr1[i]%2===1) {
       arr1.splice(i, 1)
    }
}


/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

let word = "removeallvowels";

word = word.replace(/a/g,"");
word = word.replace(/e/g,"");
word = word.replace(/i/g,"");
word = word.replace(/o/g,"");
word = word.replace(/u/g,"");

console.log("word without vowels",word);



/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/
let arr2 =[2,4,6,8]
for (let i=0;i<arr2.length;i++) {
    arr2[i]++;
}

console.log(arr2);

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: [ "strive", "is", "good"] => [ 5 , 2, 4]
*/
let strive = [ "strive", "is", "good"];
for (let i=0;i<strive.length;i++) {
    strive.splice(i,1,strive[i].length)
}

console.log(strive);

/* WHEN YOU ARE FINISHED
Send the code via Eduflow to the tutor! In the next days we'll also learn how to use GIT 
*/

