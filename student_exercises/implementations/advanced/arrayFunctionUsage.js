const { forEach } = require("./arrayFunctions");

// Array of person objects
const people = [
  {
    name: "John",
    age: 30,
    hobbies: ["reading", "painting", "coding", "running"],
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY"
    }
  },
  {
    name: "Emily",
    age: 25,
    hobbies: ["running", "cooking", "dancing", "hiking"],
    address: {
      street: "456 Elm St",
      city: "San Francisco",
      state: "CA"
    }
  },
  {
    name: "Michael",
    age: 35,
    hobbies: ["photography", "hiking", "swimming"],
    address: {
      street: "789 Oak St",
      city: "Seattle",
      state: "WA"
    }
  }
];

// Exercise: Perform the following operations using array functions on the people array:

// 1. Get an array of all the names of the people.
const names = people.map(p => p.name)

// 1.1 Get all the cities of the people
const cities = people.map(p => p.address.city)

// 1.2 Get a new array of all the people with their name and age
const namesAndAges = people.map(p => ({name: p.name, age: p.age}))

// 1.3 Get a new array containing true or false if the person is older than 30
const olderThan30 = people.map(p => p.age > 30)

// 2. Check if any person in the array has the hobby "painting". 
// documentation : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/includes
const hasPaintingHobby = people.some(p => p.hobbies.includes("painting"))

// 2.1 Check if any person in the array is older than 40
const olderThan40 = people.some(p => p.age > 40)

// 2.2 Check if any person in the array lives in "Seattle"
const livesInSeattle = people.some(p => p.address.city === "Seattle")

// 3. Find the person object with the name "Emily".
const emily = people.find(p => p.name === "Emily")

// 3.1 Find the person object living in "Seattle".
const personInSeattle = people.find(p => p.address.city === "Seattle")

// 3.2 Find the person object who has the hobby "hiking".
const personWhoHikes = people.find(p => p.hobbies.includes("hiking"))

// 4. Get the average age of all the people.
// sum of array divided by array length
const AgeArray = people.map(p => p.age)
const AgeSum = AgeArray.reduce((sum, age) => sum + age, 0)
const averageAge = AgeSum / AgeArray.length

const totalAge = people.reduce((sum, person) => sum + person.age, 0)
const averageAge2 = totalAge / people.length

// 4.1 Get the total age of all the people.
const totalAge2 = people.reduce((sum, p) => p.age+sum, 0)

// 5. Get an array of all the people in the array who have the hobby "hiking".
const peopleWhoHike = people.filter(p => p.hobbies.includes("hiking"))
/*const peopleWhoHike = people.filter(p => {
  for(let i=0; i<p.hobbies.length; i++){
    if(p.hobbies[i] === "hiking")
      return true
  }
  return false
})*/

// 5.1 Get an array of all the people in the array who live in "Seattle".
const peopleInSeattle = people.filter(p => p.address.city === "Seattle")

// 5.2 Get an array of all the people in the array whose name starts with "E".
const peopleWhoseNameStartsWithE = people.filter(p => p.name[0] === "E")
// const peopleWhoseNameStartsWithE = people.filter(p => p.name.startsWith("E"))

// 5.3 Get an array of all the people in the array whose age is less than 30.
const peopleYoungerThan30 = people.filter(p => p.age < 30)

// 5.4. Filter the people array to only include people living in "New York".
const peopleInNewYork = people.filter(p => p.address.city === "New York")
// const peopleInNewYork = people.filter(({city}) => city === "New York")

// 5.5. Filter the people array to only include people older than 30.
const peopleOlderThan30 = people.filter(p => p.age > 30)

// 6. Print the names of all the people in the array who are older than 30.
console.log("People older than 30:")
people
  .filter(p => p.age > 30)
  .forEach(p => console.log(p.name))
/*
people.forEach(p => {
  if(p.age > 30)
    console.log(p.name)
})
*/

// 6.1 Print the names of all the people in the array who have the hobby "hiking".
console.log("People who hike:")
people
  .filter(p => p.hobbies.includes("hiking"))
  .forEach(p => console.log(p.name))

// 6.2 sum the ages of all the people that have the hobby "hiking".
const totalAgeOfHikers = 
  people
    .filter(p => p.hobbies.includes("hiking"))
    .reduce((a, p) => a+p.age, 0)

// 6.3 Print the states of all the peoples
console.log("Print people state :")
people.forEach(p => console.log(p.address.state))


// 7. Get an array of all the people in the array who have a hobby that starts with "r".
const peopleWithRHobby = people.filter(p => (p.hobbies.some(h => h.startsWith("r"))))


// Print the modified people array and the result of each operation
console.log("Get array of all the name of the peoples", names);
console.log("Get all the cities of the people", cities);
console.log("Get a new array of all the people with their name and age", namesAndAges);
console.log("Get a new array containing true or false if the person is older than 30", olderThan30);
console.log("Check if any person in the array has the hobby \"painting\"", hasPaintingHobby);
console.log("Check if any person in the array is older than 40", olderThan40);
console.log("Check if any person in the array lives in \"Seattle\"", livesInSeattle);
console.log("Find the person object with the name \"Emily\"", emily);
console.log("Find the person object living in \"Seattle\"", personInSeattle);
console.log("Find the person object who has the hobby \"hiking\"", personWhoHikes);
console.log("Get the average age of all the people", averageAge);
console.log("Get the total age of all the people", totalAge2);
console.log("Get an array of all the people in the array who have the hobby \"hiking\"", peopleWhoHike);
console.log("Get an array of all the people in the array who live in \"Seattle\"", peopleInSeattle);
console.log("Get an array of all the people in the array whose name starts with \"E\"", peopleWhoseNameStartsWithE);
console.log("Get an array of all the people in the array whose age is less than 30", peopleYoungerThan30);
console.log("Filter the people array to only include people living in \"New York\"", peopleInNewYork);
console.log("Print the names of all the people in the array who are older than 30", peopleOlderThan30);
console.log("sum the ages of all the people that have the hobby \"hiking\"", totalAgeOfHikers);
console.log("Get an array of all the people in the array who have a hobby that starts with \"r\"", peopleWithRHobby);