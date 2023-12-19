// JavaScript Fundamentals – Part 2
// Coding Challenge #1

// const calcAverage = (score1, score2, score3) => {
//     const avgScore = (score1 + score2 + score3) / 3;
//     return avgScore;
// }

// OR

// const calcAverage = function (score1, score2, score3) {
//     const avgScore = (score1 + score2 + score3) / 3;
//     return avgScore;
// }

// OR

/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        const winner = console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        const winner = console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No winner.");
    }
}

const scoreDolphins = calcAverage(85, 54, 41);
console.log(scoreDolphins);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);

*/

/*

// Coding Challenge #2

const calcTip = function(billValue) {
    const tip = (billValue >= 50 && billValue <= 300) ? 0.15 * billValue : 0.20 * billValue;
    return tip
}
console.log(calcTip(125));

const bills = [125, 555, 44];
console.log(bills)
const tips = [calcTip(bills[bills.length - 3]), calcTip(bills[bills.length - 2]), calcTip(bills[bills.length - 1])];
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(totals)

*/

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: '1991',
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    licenseStatus: false,
    isDriver: function() {
        this.hasDriverLicense = (this.licenseStatus === true) ? "a" : "no";
        return this.hasDriverLicense;
    },
    calAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    }
  };

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friends name is call ${jonas.friends[0]}.`);



console.log(`${jonas.firstName} is a ${jonas.calAge()}-year old ${jonas.job} and he has ${jonas.isDriver()} driver's lincense`)

*/

/*
const mark = {
    firstName: "Mark",
    lastName: "Miller",
    fullName: "Mark Miller",
    // fullName: this.firstName + this.lastName,
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
};

const john = {
    firstName: "John",
    lastName: "Smith",
    fullName: "John Smith",
    // fullName: this.firstName + this.lastName,
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
};

// const getHighestBMI = function() {
//     const friendWithHighestBMI = mark.calcBMI() > john.calcBMI() ? mark.firstName : john.firstName;
//     return friendWithHighestBMI;
// };

// console.log(`${getHighestBMI()}'s weights ${getHighestBMI().mass}kg and is ${getHighestBMI.height}m tall`);


mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
}
else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}
*/

/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function(billValue) {
    const tip = (billValue >= 50 && billValue <= 300) ? 0.15 * billValue : 0.20 * billValue;
    return tip
}

for (let i = 0; i < bills.length; i++) {
    tips[i] =  calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
}

// console.log(totals)





const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

calcAverage(totals)
*/

/*
// LECTURE: Introduction to Arrays

const populations = [82, 250, 65, 320];
console.log(populations.length === 4 ? true : false);

const percentages = [];

function percentageOfWorld(population) {
  const worldPopulation = 7900;
  return (population * 100) / worldPopulation;
}

for (let i = 0; i < populations.length; i++) {
  //   percentages[i] = percentageOfWorld(populations[i]);
  percentages.push(percentageOfWorld(populations[i]));
}
console.log(percentages);

console.log("test and still testing");

*/

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: "1991",
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  licenseStatus: false,
  isDriver: function () {
    this.hasDriverLicense = this.licenseStatus === true ? "a" : "no";
    return this.hasDriverLicense;
  },
  calAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};

console.log(jonas.calAge());
console.log(jonas.age);
