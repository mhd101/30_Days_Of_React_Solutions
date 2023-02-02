/* LEVEL 1 */

// 1

const userAge = prompt('Enter Your Age: ');

if(userAge >= 18){
    console.log('You are old enough to drive.');
} else {
    console.log(`You are left with ${18-userAge} years to drive.`)
}

// 2

const myAge = 20;
const yourAge = prompt('Enter your Age: ')

if (myAge > yourAge){
    console.log(`Your are ${myAge-yourAge} years younger than me.`)
} else {
    console.log(`Your are ${yourAge-myAge} years older than me.`)
}

// 3

let a = 4
let b = 3

if (a > b) {
    console.log('A is greater than B.');
} else {
    console.log('A is less than B')
}

(a > b) ? console.log('A is greater than B.') : console.log('A is less than B'); // ternary operator

// 4

const number = prompt("Enter a Number: ")

if (number % 2 == 0){
    console.log(`${number} is an even number`)
} else {
    console.log(`${number} is an odd number`)
}


/* LEVEL 2 */

// 1

const studentScore = prompt('Enter your Score:')

if (studentScore > 100 || studentScore < 0){
    console.log('Enter Correct Score!!')
} else {
    if (studentScore >= 80 && studentScore <= 100){
        console.log('Grade A')
    } else if(studentScore >= 70 && studentScore <= 79){
        console.log('Grade B')
    } else if(studentScore >= 60 && studentScore <= 69){
        console.log('Grade C')
    } else if(studentScore >= 50 && studentScore <= 59){
        console.log('Grade D')
    } else {
        console.log('Grade F')
    }
}

// 2

const userInput = (prompt('Enter any Month: ')).toLowerCase()

if(userInput == 'september' || userInput == 'october' || userInput == 'november'){
    console.log('Season is Autumn')
} else if(userInput == 'december' || userInput == 'january' || userInput == 'february'){
    console.log('Season is Winter')
} else if(userInput == 'march' || userInput == 'april' || userInput == 'may'){
    console.log('Season is Spring')
} else if(userInput == 'june' || userInput == 'july' || userInput == 'august'){
    console.log('Season is Summer')
} else {
    console.log('Enter Correct Month')
}

// 3

const userInput2 = (prompt('Enter Day')).toLowerCase()

if (userInput2 == 'monday' || userInput2 == 'tuesday' || userInput2 == 'wednesday' || userInput2 == 'thursday' || userInput2 == 'friday'){
    console.log(`${userInput2} is a working day.`)
} else if(userInput2 == 'saturday' || userInput2 == 'sunday'){
    console.log(`${userInput2} is a weekend.`)
} else {
    console.log('Enter Correct Day')
}



/* LEVEL 3 */

// 1

const userInput3 = (prompt('Enter a month: ')).toLowerCase()

if (userInput3 == 'january' || userInput3 == 'march' || userInput3 == 'may' || userInput3 == 'july' || userInput3 == 'august' || userInput3 == 'october' || userInput3 == 'december') {
    console.log(`${userInput3} has 31 days.`)
} else if (userInput3 == 'february' || userInput3 == 'april' || userInput3 == 'june' || userInput3 == 'september' || userInput3 == 'november') {
    console.log(`${userInput3} has 30 days.`)
} else {
    console.log('Enter correct month!!')
}

// 2

const userInput4 = (prompt('Enter a month: ')).toLowerCase()

if (userInput4 == 'january' || userInput4 == 'march' || userInput4 == 'may' || userInput4 == 'july' || userInput4 == 'august' || userInput4 == 'october' || userInput4 == 'december') {
    console.log(`${userInput4} has 31 days.`)
} else if (userInput4 == 'february') {
    console.log(`${userInput4} has 28 days.`)
} else if (userInput4 == 'april' || userInput4 == 'june' || userInput4 == 'september' || userInput4 == 'november') {
    console.log(`${userInput4} has 30 days.`)
} else {
    console.log('Enter correct month!!')
}