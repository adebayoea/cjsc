
/*
let js = "amazing";
// if (js === 'amazing') alert("Javascript is fun");

let sum = 10+40+8+23-10;
let age = sum;
console.log(age + 29);

let firstName = "Jonas";
console.log(firstName + "'s grandmother will be " + age + " next year");
*/


/*
const country = "Nigeria";
const continent = "Africa";
const population = 250;
// console.log(Country, continent, population);

let isIsland = false;
let language;
console.log(typeof isIsland, typeof population, typeof country, typeof language);
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "Yoruba";

let populationIncrement = 1; 

populationIncrement += population;

const currentYear = 2023;

console.log(population / 2); // half population
console.log(populationIncrement);

const populationOfFinland = 6;

console.log(population > populationOfFinland);

const avgPopulation = 33;
const populationDifference = population - avgPopulation

if (population > avgPopulation) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${populationDifference} below average`)
}
*/


/*
// Challeng 1 AND 2

let massMark = 78;
let heightMark = 1.69;
let BMIMark;

BMIMark = massMark / (heightMark * heightMark);

let massJohn = 92;
let heightJohn = 1.95;
let BMIJohn;

BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`);
}  else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`);
}
*/


/*
// Challenge 3

const dolphinsAvgScore = (96 + 108 + 89) / 3;
const koalasAvgScore = (88 + 91 + 110) / 3;
console.log(dolphinsAvgScore, koalasAvgScore);

if (dolphinsAvgScore > koalasAvgScore){
    console.log("Dolphins win the trophy 🏆");
} else if (koalasAvgScore > dolphinsAvgScore) {
    console.log("Koalas win!");
} else if (dolphinsAvgScore === koalasAvgScore) {
    console.log("It's a draw!");
}
*/


/*
const dolphinsAvgScore = (97 + 112 + 101) / 3;
const koalasAvgScore = (109 + 95 + 123) / 3;
const minScore = 100

console.log(dolphinsAvgScore, koalasAvgScore);

if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= minScore){
    console.log("Dolphins win the trophy 🏆");
} else if (koalasAvgScore > dolphinsAvgScore && koalasAvgScore >= minScore) {
    console.log("Koalas win the trophy");
} else if (dolphinsAvgScore === koalasAvgScore) {
    console.log("Both win the trophy");
}
*/


/*
const dolphinsAvgScore = (97 + 112 + 101) / 3;
const koalasAvgScore = (109 + 95 + 106) / 3;
const minScore = 100;

console.log(dolphinsAvgScore, koalasAvgScore);

if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= minScore){
    console.log("Dolphins win the trophy 🏆");
} else if (koalasAvgScore > dolphinsAvgScore && koalasAvgScore >= minScore) {
    console.log("Koalas win the trophy");
} else if (dolphinsAvgScore === koalasAvgScore && dolphinsAvgScore >= minScore) {
    console.log("Both win the trophy");
} else {
    console.log("No one wins the trophy")
}
*/


/*
//LECTURE: Type Conversion and Coercion

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);
*/


/*
// LECTURE: Equality Operators: == vs. ===

const numOfNeighbours = Number(prompt("How many number for neighbour countries does your country have?"));

console.log(numOfNeighbours)

if (numOfNeighbours === 1) {
    console.log("Only 1 border");
} else if (numOfNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No border");
}
*/


/*
// LECTURE: Logical Operators

const country = "Nigeria";
const continent = "Africa";
const population = 250;
const language = "English";
const notIsland = true;
const migName = prompt("Enter the migrant name");

// console.log(typeof isIsland);

if (language === "English" && population >= 50 && notIsland) {
    console.log(`${migName} can live in ${country}`);
} else {
    console.log("nothing")
}
*/


/*

let day = prompt("enter a valid day");

if (day === "monday") {
    console.log("it's mango day");
} else if (day === "teusday") {
    console.log("it's tissue paper's day");
} else if (day === "wednesday" || day === "thursday") {
    console.log("someone's getting married");
} else if (day === "friday") {
    console.log("Its the begining of honeymoon");
} else if (day === "saturday" || day === "sunday") {
    console.log("who's chilling today");
} else {
    console.log("not a valid day");
}

*/



/*
// LECTURE: The switch Statement

const language = prompt("Enter language");

switch (language) {
    case "mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "sanish":
        console.log("2nd place in the number of native speakers");
        break;
    case "english":
        console.log("3d place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");    
}
*/





/*
// Coding Challenge #4

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
const totalValue = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);
*/



/*

// LECTURE: The Conditional (Ternary) Operator

const country = "Nigeria";
let population = Number(prompt("Enter the migrant name"));

const avgPopulation = population > 33 ? "above" : "below";
console.log(`${country}'s population is ${avgPopulation} average.`);

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average.`);

*/


/*
// LECTURE: Functions

function describeCountry(country, population, capitalCity) {
    return console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
}

describeCountry("Nigeria", 250, "Abuja");
describeCountry("Germany", 82, "Berlin");
describeCountry("Finland", 6, "Helsinki");

*/


/*

// LECTURE: Function Declarations vs. Expressions

function percentageOfWorld(population){
    const worldPopulation = 7900;
    return console.log((population * 100) / worldPopulation);
}

percentageOfWorld(250);
percentageOfWorld(82);
percentageOfWorld(1441);

*/


/*

// LECTURE: Function Declarations vs. Expressions

const worldPopulation = 7900;
const percentageOfWorld2 = function (population){
    return console.log((population / worldPopulation) * 100);
}

percentageOfWorld2(250);
percentageOfWorld2(82);
percentageOfWorld2(1441);

*/



/*

// LECTURE: Arrow Functions

const percentageOfWorld3 = (population) => {
    const worldPopulation = 7900;
    return console.log((population / worldPopulation) * 100);
}

percentageOfWorld3(250);
percentageOfWorld3(82);
percentageOfWorld3(1441);

*/


/*

// LECTURE: Functions Calling Other Functions

const percentageOfWorld3 = (population) => {
    const worldPopulation = 7900;
    const populationPercentage = (population / worldPopulation) * 100;
    return populationPercentage
}

function describeCountry(country, population) {
    return console.log(`${country} has ${population} million people which is about ${percentageOfWorld3(population)}`);
}

describeCountry("Nigeria", 250);

*/