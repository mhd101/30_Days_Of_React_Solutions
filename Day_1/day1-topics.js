// Javascript Revision

// var

var x = 10;

var x = 20;

console.log(x);

// let 


let y = 20;

// const y = 30; // error

console.log(y);

// const

const z = 10;

// const z= 20; // error

console.log(z);


// Math Objects

const PI = Math.PI;

console.log(PI)

console.log(Math.round(PI)); // 3

console.log(Math.round(9.81)); // round to 10

console.log(Math.floor(PI)); // rounding down

console.log(Math.ceil(PI));  // rounding up

console.log(Math.min(1, 2, 3, 4, 5, -10)); // returns -10

console.log(Math.max(1, 2, 3, 4, 5, -10)); // returns 5

console.log(Math.random()) // returns random value between -0 to 0.999999

console.log(Math.abs(-5)); // returns positive value

console.log(Math.sqrt(3)); // returns square root value

console.log(Math.pow(3, 2)); // returns the power value

console.log(Math.log(2)); // returns the log value

console.log(Math.cos(0)); // returns trigonometric value


// Strings

let string = ''; // empty string
let string1 = 'Hello'; // single quote string
let string2 = "Hello"; // double quote string
let string3 = `Hello`; // backtick quote string


let string4 = string1 + string2; // concatenation

console.log(string4);

let string5 = `The value of PI is ${(Math.PI).toFixed(2)}`

console.log(string5); // Template Literals 

// String Methods

let str = '30DaysOfReact'

console.log(str.length) // returns the string length
console.log(str[2]) // returns the value present on the index
console.log(str.toUpperCase()) // returns value in uppercase
console.log(str.toLowerCase()) // returns value in lowercase
console.log(str.substr(6, 2)) // returns the trim out value
console.log(str.substring(0, 6)) // returns the trim out value
console.log(str.split('')) // return the value in array
console.log(str.trim()) // removes the trailing space from the beginning or the end 
console.log(str.includes(30)) // checks the value present in the string or not
console.log(str.replace(30, '10')) // replace the value to another value
console.log(str.charAt(0)) // returns the value given at the index
console.log(str.charCodeAt(0)) // returns the ASCII value
console.log(str.indexOf('a')) // return the index 
console.log(str.lastIndexOf('a')) // return the last index present in string
console.log(str.concat(' by Asabeneh')) // concats two strings together
console.log(str.startsWith('3')) // check whether it starts from given value
console.log(str.endsWith('s')) // check whether it ends with given value
console.log(str.search('React')) // check whether the value is present or not & also can use regex and returns the first index of the matched value
console.log(str.match('Of')) // check whether the value is present or not & also can use regex and returns null if not present
console.log(str.repeat(2)) // returns  the repeated version of string

// String to int typecasting

let int = '10';

console.log(parseInt(int))
console.log(Number(int))
console.log(+int)

// string to float typecasting

let float = '10.32';

console.log(parseFloat(float))
console.log(Number(float))
console.log(+float)

// float to int typecasting
console.log(parseInt(float))


// Date Object

const now = new Date();

console.log(now.getFullYear()) // returns year
console.log(now.getDate()) // return date
console.log(now.getMonth() + 1) // return month
console.log(now.getHours()) // return hours
console.log(now.getMinutes()) // return minutes
console.log(now.getSeconds()) // return seconds
console.log(now.getDay()) // return day



// Arrays

const arr = [1, 2, 3, 4, 5]
console.log(arr[2])

const arr2 = [1, 'hello', true] // array can store different types of value

const arr3 = 'Javascript is a programming language'
console.log(arr3.split(' ')) // split the string 

const arr4 = ['A', 'B', 'C']
arr4[2] = 'c'
console.log(arr4)

const arr5 = [6, 7, 8, 9, 10]
console.log(arr.concat(arr5)) // concat two arrays

console.log(arr5.length) // returns array length

console.log(arr5.indexOf(10)) // returns the index 

// check items in a list

const arr6 = ['John', 'Smith', 'Evay']

let index = arr6.indexOf('Smith')

if (index == -1) {
    console.log("Items is not in the list")
} else {
    console.log("Items is present in the list")
}

// check array data type

console.log(Array.isArray(arr6))

// convert array to string

console.log(arr6.toString())

// Join method

console.log(arr6.join(''))
console.log(arr6.join(' '))
console.log(arr6.join(', '))

// Slice method

console.log(arr6.slice(0, 1))

// Splice Method

console.log(arr6.splice(1, 2))

// Push Method

let num = [10, 20, 30, 40, 50]

num.push(60)
console.log(num)

// Pop Method

num.pop()
console.log(num)

// Shift Method

num.shift()
console.log(num)

// Unshift Method

num.unshift(0);
console.log(num)

// Reverse

console.log(num.reverse());

// Sort

console.log(num.sort());

// Array of Arrays

let firstArr = [1, 2, 3]
let secondArr = [4, 5, 6]

let numbers = [firstArr, secondArr]

console.log(numbers)




// Loops

// for loop

for (let i = 0; i <= 5; i++) {
    console.log(i)
}

// while loop

// use it when iteration is not known

let i = 10;
while (i > 0) {
    console.log(i)
    i--;
}

// do while

// runs atleast once if the condition is true or false

let j = 10
do {
    console.log(i)
    i++;
} while (j < 0)

// for of

// use to loop array if we are not interested in index value

const array = [1, 2, 3, 4, 5]

for (const arr of array) {
    console.log(arr)
}

// for each

// use to loop array if we are interested in index value. It takes a callback funtion, the callback function take three args:- (item, index, array)

array.forEach((items, index, arr) => {
    console.log(items, index, arr)
})

// for in

// use with object literals to get the keys of the object.

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    country: 'Germany'
}

for (const key in user) {
    console.log(`${key}: ${user[key]}`)
}

// break

// used to break the loop

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i)
}

// continue

// used to skip the item in a loop

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i)
}




// Objects

// Creating empty objects

const person = {};

// Creating objects with values

const rectangle = {
    length: 20,
    width: 10,
}

// Accessing values from an object

// we can access value from object using . followed by key name or using square bracket and a single quote

// accessing using .

console.log(rectangle.width)

// accessing using bracket

console.log(rectangle['length'])

// Creating object methods

const user1 = {
    name: 'john',
    role: 'user',
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName)
    }
}

user1.buyCourse('React')

console.log(user1.courseList)

// Setting new key for an object

user1.country = 'Iceland'

console.log(user1)

user1.getName = function () {
    return `${this.name}`
}

console.log(user1.getName())

// Object methods

// Object.assign():- To copy an object without modifying the original object

let userCopy = Object.assign({}, user)
console.log(userCopy)

// Object.keys:- To get the keys or properties of an object as an array

console.log(Object.keys(userCopy))

// Object.values:- To get the values of an object as an array

console.log(Object.values(userCopy))

// Object.entries:- To get both the keys and values as an array

console.log(Object.entries(userCopy))

// hasOwnProperty:- To check if a specific key or property exist in an object

console.log(user1.hasOwnProperty('name'))
console.log(user1.hasOwnProperty('roles'))



// Functions

// function declaration

function square(num) {
    return num * num
}

console.log(square(3))

// regular functions with unlimited no. of parameters using arguments

function add() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(add(1, 2, 3, 4, 5))

// arrow functions with unlimited no. of paramater using spread operator (...args)

const sumAllNums = (...args) => {
    let sum = 0
    for (const s of args) {
        sum += s
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4, 5))

// Anonymous Functions

const anonymousFunction = function () {
    return 'I am an anonymous function and my value is stored in anonymousFunction variable'
}

console.log(anonymousFunction())

// Expression Function also known as anonymous function

const cube = function (n) {
    return n * n * n
}

console.log(cube(2))

// Self Invoking functions

const areaOfSquare = (function (l, b) {
    return l * b
})(10, 20)

console.log(areaOfSquare)

// Arrow Function

areaOfCircle = (radius) => {
    return 2 * 3.14 * Math.pow(radius, 2);
}

// also it can be written as

areaOfCircle = (radius) => 3.14 * Math.pow(radius, 2);

console.log(areaOfCircle(2))

// Function with default parameters (regular as well as arrow)

function greeting(name = 'mhd') {
    return name + ',  welcome to 30 Days Of React'
}


greeting = (name = 'mhd') => name + ',  welcome to 30 Days Of React'

console.log(greeting())
console.log(greeting('John'))



// High Order Functions

// Callback Functions

const hello = () => {
    return 'Hello'
}

// function take other function as a callback
function print(callback) {
    return callback();
}

console.log(print(hello))

// Returning Functions

const one = x => {
    const two = y => {
        const three = z => {
            return x * y * z;
        }
        return three
    }
    return two
}

console.log(one(1)(2)(3))

// Set Interval

const sayHello = () => {
    console.log('Hello from Set Interval')
}

// setInterval(sayHello, 5000)

// Set Timeout

const sayHello2 = () => {
    console.log('Hello from Set Timeout')
}

// setTimeout(sayHello2, 5000)


// Destructuring and Spreading

// Accessing Array items using destructuring

const numbers3 = [1, 2, 3, 4, 5]

const [num1, num2, num3] = numbers3
console.log(num1, num2, num3)

const countries = ['finland', 'sweden', undefined, 'norway']

const [fin, swe, ice = 'iceland', nor, ind = 'india'] = countries
console.log(fin, swe, ice, nor, ind)

// Destructuring Nested Arrays

const fullStack = [['HTML', 'CSS', 'JS', 'React'], ['Node', 'Express', 'MongoDB']]

const [frontEnd, backEnd] = fullStack
console.log(frontEnd, backEnd)

// Skipping an item during destructuring

const nums = [1, 2, 3, 4, 5]

const [n1, n2, , n4, n5] = nums
console.log(n1, n2, n4, n5)

// getting the rest items using spread operator ...

const [number1, number2, ...number] = nums

console.log(number1, number2, number)

// Destructuring when we loop through arrays

const countries2 = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]

for (const [country, city] of countries2) {
    console.log(country, city)
}

// Destructuring Objects

const square2 = {
    width: 10,
    height: 10
}

const { width, height, perimeter = 100 } = square2
console.log(width, height, perimeter)

// Renaming variables name

let { width: w, height: h } = square2
console.log(w, h)

// Destructuring Nested Objects

const props = {
    user: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        age: 250
    },
    post: {
        title: 'Destructuring and Spread',
        subtitle: 'ES6',
        year: 2020
    },
    skills: ['JS', 'React', 'Redux', 'Node', 'Python']

}

const { user6, post, skills } = props
const { firstName, lastName, age } = user
const { title, subtitle, year } = post
const [skillOne, skillTwo, skillThree, skillFour, skillFive] = skills

console.log(props)

// Destructuring during loop through an array

const languages = [
    { lang: 'English', count: 91 },
    { lang: 'French', count: 45 },
    { lang: 'Arabic', count: 25 },
    { lang: 'Spanish', count: 24 },
    { lang: 'Russian', count: 9 },
    { lang: 'Portuguese', count: 9 },
    { lang: 'Dutch', count: 8 },
    { lang: 'German', count: 7 },
    { lang: 'Chinese', count: 5 },
    { lang: 'Swahili', count: 4 },
    { lang: 'Serbian', count: 4 },
]

for (const { lang, count } of languages) {
    console.log(lang, count)
}

// Destructuring function parameter

const rectangle2 = {
    width: 20,
    length: 10
}

const perimeter2 = ({ width, length }) => 2 * (length + width)

console.log(perimeter2(rectangle2))


// Spread Operator

const books = ['book1', 'book2', 'book3']

const [b1, ...rest] = books

console.log(b1, rest)

// Using spread operator to copy array

const even = [0, 2, 4, 6, 8, 10]
const [...evens] = even

const odd = [1, 3, 5, 7, 9]
const [...odds] = odd

const wholeNum = [...evens, ...odds]
console.log(wholeNum)


// Using spread operator to copy objects

const userObject = {
    name: 'John',
    title: 'Developer',
    country: 'Germany',
}

const copiedUser = { ...userObject }
console.log(copiedUser)


// Modifying object while copying using spread operator

const copyUser = { ...userObject, title: 'Programmer' }

console.log(copyUser)


// Functional Programming 

// forEach :- It is used when we need to loop items in an array and it take a callback function with three parameters (item, index, array)

const countriesArr = ['Finland', 'Estonia', 'Sweden', 'Norway']

countriesArr.forEach((item, inder, arr) => {
    console.log(item.toUpperCase(), inder, arr)
})

// Map :- It is used when we need to modify the array and returns the array

const upperCaseCountries = countriesArr.map(x => {
    return x.toUpperCase()
})

console.log(upperCaseCountries)

const countriesLength = countriesArr.map(x => x.length)

console.log(countriesLength)

// Filter:- It returns the filtered items from an array

const countriesEndsWithLand = countriesArr.filter(x => {
    return x.includes('land')
})

console.log(countriesEndsWithLand)

// Reduce

const people = [
    { id: '1', name: 'Leigh', age: 25 },
    { id: '2', name: 'Jenny', age: 30 },
    { id: '3', name: 'Heather', age: 28 },
]

let result;

// count

result = people.reduce((acc, person) => {
    return acc + 1
}, 0)

console.log(result)

// sum ages 

result = people.reduce((acc, person) => {
    return acc + person.age
}, 0)

console.log(result)

// array of names (map)

result = people.reduce((acc, person) => {
    return [...acc, person.name]
}, [])

console.log(result)

// convert to id => person loopup

result = people.reduce((acc, person) => {
    return { ...acc, [person.id]: person }
}, {})

console.log(result)
console.log(result['1'])

// max age

result = people.reduce((maxAge, person) => {
    if (person.age > maxAge) {
        return person.age
    }

    return maxAge

}, 0)


console.log(result)

// min age

result = people.reduce((acc, person) => {
    if (acc == null || person.age < acc) return person.age
    return acc;
}, null)

console.log(result)

// find by name

result = people.reduce((acc, person) => {
    if (acc !== null) return acc
    if (person.name === 'Heather') return person
    return null
}, null)

console.log(result)

// all over 18

result = people.reduce((acc, person) => {
    if (!acc) return false
    return person.age > 18

}, true)

console.log(result);

// any over 19

result = people.reduce((acc, person) => {
    if (acc) return true
    return person.age > 18
}, false)

console.log(result)

// count occurences

const orders = [
    { id: '1', status: 'pending' },
    { id: '2', status: 'pending' },
    { id: '3', status: 'cancelled' },
    { id: '4', status: 'shipped' }
]

result = orders.reduce((prev, orders) => {
    prev[orders.status] = (prev[orders.status] || 0) + 1
    return prev
}, {})

console.log(result)

// find :- It returns the first occurence of an item instead of an array

const wholeNumbers = [0, 1, 2, 3, 4, 5, 6]
let firstEvenNumber = wholeNumbers.find(e => e % 2 == 0)
let firstOddNumber = wholeNumbers.find(e => e % 2 != 0)
console.log(firstEvenNumber)
console.log(firstOddNumber)

// findIndex :- It returns the index of first occurence of an item 

const country = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const indx = country.findIndex(i => i.endsWith('land'))
console.log(indx)

// some:- It returns true if any items satisfy the criteria else it will be false. It works with array

let someAreEven = wholeNumbers.some((n) => n % 2 == 0)
console.log(someAreEven)

let evensNum = [0, 2, 4, 6, 8]
let someAreOdds = evensNum.some((n) => n % 2 != 0)
console.log(someAreOdds)

// every:- It returns false if any doesn't satisfy the criteria else it will be true. It works with array

const primeNumbers = [2, 3, 5, 7, 9]

let oddsInPrime = primeNumbers.every(n => n % 2 != 0)
console.log(oddsInPrime)

let countries5 = ['Iceland', 'Finland', 'Greenland']

let isCountriesEndsWithLand = countries5.every(c => c.includes('land'))

console.log(isCountriesEndsWithLand)


// Classes

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

const p1 = new Person('John', 'Doe');
console.log(p1)

// constructor default values

class Employee {
    constructor(Name, Position = 'Developer') {
        this.Name = Name
        this.Position = Position
    }
}


const emp1 = new Employee('John')
console.log(emp1)

const emp2 = new Employee('Smith', 'HR')
console.log(emp2)

// class Methods

class Student {
    constructor(Name, rollNo) {
        this.Name = Name
        this.rollNo = rollNo
    }

    getStudentInfo() {
        return `Name: ${this.Name}\nRoll No: ${this.rollNo}`
    }

}

const std1 = new Student('John', 123)
console.log(std1.getStudentInfo())

// Getter and Setter

class Student2 {

    constructor(Name, rollNo) {
        this.Name = Name
        this.rollNo = rollNo
    }

    set setStudentName(Name) {
        this.Name = Name
    }

    set setStudentRollNo(rollNo) {
        this.rollNo = rollNo
    }

    get StudentInfo() {
        return this.Name + " " + this.rollNo
    }

}

const std2 = new Student2()
std2.setStudentName = 'Smith'
std2.setStudentRollNo = 123

console.log(std2.StudentInfo)

// Static Method

class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static getId(){
        console.log('Null')
    }
}

Person2.getId() // It can be called without creating object

// Inheritance

class Animal {
    eating(){
        console.log('Animal is Eating')
    }

    moving(){
        console.log('Animal is Moving')
    }
}

class Lion extends Animal {

}

const lion = new Lion()
lion.eating() // taking properties of parent class animal
lion.moving() // taking properties of parent class animal

// Method Overriding

class Cat extends Animal {
    eating(){
        console.log('Cat is eating')
    }
    moving(){
        console.log('Cat is moving')
    }
}

const cat = new Cat()
cat.eating() // eating method of parent class animal is overrided by child class cat
cat.moving() // eating method of parent class animal is overrided by child class cat



