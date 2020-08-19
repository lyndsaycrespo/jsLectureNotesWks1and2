// CHALLENGE 1
// Who's name is longer?

/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
*/

let x = "Lyndsay";
let y = "Mark";

console.log(x.length);
console.log(y.length);

 /* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/

let x = "Lyndsay";
let y = "Mark";

if (x.length > y.length) {
    console.log(`${x}'s name is longer than ${y}'s.`);
}
    else if (y.length > x.length) {
        console.log(`${y}'s name is longer than ${x}'s.`);
    }  

/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/

let x = "Lyndsay";
let y = "Mark";

if (x.length > y.length) {
    let difference = x.length - y.length; 
    console.log(`${x}'s name is longer than ${y}'s by ${difference} letters.`);
}
    else if (y.length > x.length) {
        let difference = y.length - x.length;
        console.log(`${y}'s name is longer than ${x}'s by ${difference} letters.`);
    }   else {
            console.log{"Our names are the same length."}
    }

// CHALLENGE 2
// Types Challenge
/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
*/
let hulk = {
    color: "green",
    age: 42,
    isStrong: true,
    attributes: {
        clothes: "shorts",
        hair: "dark green",
        heightInches: 80,
        clothesFit: false
    }
}
console.log(hulk.age);

/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/
let hulk = {
    color: "green",
    age: 42,
    isStrong: true,
    attributes: {
        clothes: "shorts",
        hair: "dark green",
        heightInches: 80,
        clothesFit: false
    }
} 

let value = hulk.attributes.clothes;

if (typeof value === "string") {
    console.log("This value is a string.");
}   else if (typeof value === "number") {
        console ("This value is a number.");
    }   else if (typeof value === "boolean") {
            console.log("This value is a boolean.");
        }   else if (typeof value === "object") {
                console.log("This value is an object.");
            }   else {
                    console.log("What are you?!");
            }