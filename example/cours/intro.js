// function f(){
//   var x = 12
// }
// let x = 23
// console.log("console.log global", x)
// f()
// console.log("console.log global", x)
// x = 34
// console.log("console.log global", x)

// let x
// console.log(typeof x, x)

// x = 12
// console.log(typeof x, x)

// let x
// if(false) {
//   x = 10
// } else {
//   x = 5
// }

// console.log(x)

// let x = 5
// x %= 2 // x = x+2
// console.log(x)

// console.log(x)

// nom = "Pisanello"
// prenom = "Antonio"
// console.log(nom + " " + prenom)

// let y = 10
// console.log(x%y)

// x = 0
// x = x+1
// x += 1
// x++
// console.log(x)

// x = 0
// console.log(x++)
// x = 0
// console.log(++x)

// console.log(age >= 18)
// console.log(!true)

// let x = 2
// // console.log(2 >= "2")


// console.log(typeof x)

// let number = -30
// if (number > 0){
//   console.log("Positive")
// } else if (number < 0) {
//   console.log("Negative")
// } else if (number < 10) {
//   console.log("< 10")
// } else {
//   console.log("Zero")
// }

// console.log("Always printed")

// const boisson = "soda"
// switch(boisson) {
//   case "soda":
//     console.log("Soda!")
//     break
//   case "cafe":
//     console.log("cafe!")
//     break
//   case "the":
//     console.log("the!")
//     break
//   default:
//     console.log("Another drink")
//     break
// }

// if(boisson == "soda") {
//   console.log("Soda!")
// } else if(boisson == "cafe") {
//   console.log("cafe!")
// } else if(boisson == "the") {
//   console.log("the!")
// } else {
//   console.log("Another drink") 
// }

const age = 21
// let majority

// if (age >= 18) {
//   majority = "Major"
// } else {
//   majority = "Minor"
// }

// if (age >= 18) 
//   majority = "Major"
// else {
//   majority = "Minor"
//   console.log("COUCOU")
// }
// const majority = (age >= 18 ? (age < 3 ? "Jeune adulte" : "Adulte" ) : "Minor")
// console.log(majority)

// let i = 1
// while(i <= 10) {
//   // console.log(i)
//   if (i === 5){
//     break
//   }
//   i++
// }

// console.log(i)

// for(let i=10; i>=0; i--) {
//   // console.log(i)
//   if (i === 5) break
// }

// console.log(i)

let fruits = ["apple", "banana", "watermelon"]
// console.log(fruits)
// console.log(typeof fruits)
// // fruits[1] = "peach"
// // console.log(fruits)
// fruits.push("grape")
// console.log(fruits)
// const lastFruit = fruits.pop()
// console.log(lastFruit)
// console.log(fruits)
// console.log(fruits.length)

// for(let i=0; i < fruits.length; i++){
//   console.log(fruits[i])
// }

// for(let i in fruits){
//   console.log(i)
// }

// for(let fruit of fruits){
//   if(fruit === "watermelon"){
//     console.log("Love summer !")
//   } else {
//     console.log(fruit)
//   }
// }

// fruits.forEach()

// function salutation() {
//   return console.log("Hello World !")
// }

// function addNumbers(num1, num2) {
//   return num1+num2
// }

// const a=12
// const b=13
// const result = addNumbers(a, b)
// const reminder3 = result % 3
// console.log(result)
// const a=8
// const b=a

// const an = addNumbers
// console.log(an(2, 3))
// function salutation() {
//   console.log("COUCOU")
// }
// function aurevoir(){
//   console.log("Adieu")
// }
// function testCallback(f) {
//   console.log("Callback")
//   f()
// }

// testCallback(aurevoir)

let numbers = [1,2,3,4,5]
let numbers2 = [1,2,3,4,5, 6, 7, 8, 9, 10]
// function displayNumbers(ln) {
//   for(n of ln){
//     console.log(n)
//   }
// }

// // displayNumbers(numbers)

// function computeList(f, listNumbers) {
//   for(number of listNumbers) {
//     const result = f(number)
//     console.log(result)
//   }
// }

// const square = function (n) {
//   return n*n
// }

// function square2(n) {
//   return n*n
// }

// const square3 = n => n*n
// const sum_ = (n1, n2) => n1+n2
// const sum_2 = (n1, n2) => { return n1+n2 }

// console.log("sum", sum_(1, 2))

// // function square(n) {
// //   return n*n
// // }

// computeList((n) => {
//   return n*n
// } , numbers2)

// console.log("-------------")
// computeList(n => 2*n, numbers)

// console.log("-------------")
// computeList(function (n) {
//   return (n%2===0 ? "Even" : "Odd")
// }, numbers)

// for(number of numbers){
//   console.log(number)
// }

// function foreachCallback(v, i, a){
//   console.log(v, i, a)
// }

// numbers.forEach(foreachCallback)
// numbers.forEach(function (v, i, a) {
//   console.log(v, i, a)
// })

// numbers.forEach((v, i, a) => { console.log(v, i, a) })

// function myForEach(f, a) {
//   for(let i=0; i<a.length; i++) {
//     const v = a[i]
//     const index = i
//     const arr = a

//     f(v, index, arr)
//   }
// }

// myForEach(console.log, [2,3,6,8,12])

// console.log(Number(true))

if(0) {
  console.log("true")
}

console.log("2" === 2)

let j
console.log(j)