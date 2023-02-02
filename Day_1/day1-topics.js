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

console.log(Math.min(1,2,3,4,5,-10)); // returns -10

console.log(Math.max(1,2,3,4,5,-10)); // returns 5

console.log(Math.random()) // returns random value between -0 to 0.999999

console.log(Math.abs(-5)); // returns positive value

console.log(Math.sqrt(3)); // returns square root value

console.log(Math.pow(3,2)); // returns the power value

console.log(Math.log(2)); // returns the log value

console.log(Math.cos(0)); // returns trigonometric value


// Strings

let string =  ''; // empty string
let string1 =  'Hello'; // single quote string
let string2 =  "Hello"; // double quote string
let string3 =  `Hello`; // backtick quote string


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
console.log(str.substr(6,2)) // returns the trim out value
console.log(str.substring(0,6)) // returns the trim out value
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

const arr = [1,2,3,4,5]
console.log(arr[2])

const arr2 = [1, 'hello', true] // array can store different types of value

const arr3 = 'Javascript is a programming language'
console.log(arr3.split(' ')) // split the string 

const arr4 = ['A', 'B', 'C']
arr4[2] = 'c'
console.log(arr4)

const arr5 = [6,7,8,9,10]
console.log(arr.concat(arr5)) // concat two arrays

console.log(arr5.length) // returns array length

console.log(arr5.indexOf(10)) // returns the index 

// check items in a list

const arr6 = ['John', 'Smith', 'Evay']

let index = arr6.indexOf('Smith')

if(index == -1) {
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

console.log(arr6.slice(0,1))

// Splice Method

console.log(arr6.splice(1,2))

// Push Method

let num = [10,20,30,40,50]

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

let firstArr = [1,2,3]
let secondArr = [4,5,6]

let numbers = [firstArr, secondArr]

console.log(numbers)




// Loops

// for loop

for(let i = 0; i <= 5; i++){
    console.log(i)
}

// while loop

// use it when iteration is not known

let i = 10;
while( i> 0){
    console.log(i)
    i--;
}

// do while

// runs atleast once if the condition is true or false

let j = 10
do{
    console.log(i)
    i++;
}while(j < 0)

// for of

// use to loop array if we are not interested in index value

const array = [1,2,3,4,5]

for (const arr of array){
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

for(const key in user){
    console.log(`${key}: ${user[key]}`)
}

// break

// used to break the loop

for(let i = 0; i <= 5; i++){
    if(i == 3){
        break;
    }
    console.log(i)
}

// continue

// used to skip the item in a loop

for(let i = 0; i <= 5; i++){
    if(i ==3){
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
    buyCourse: function(courseName){
        this.courseList.push(courseName)
    }
}

user1.buyCourse('React')

console.log(user1.courseList)

// Setting new key for an object

user1.country = 'Iceland'

console.log(user1)

user1.getName = function(){
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

