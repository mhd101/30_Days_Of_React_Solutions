/* LEVEL 1 */

// 1

let arr = [];

// 2

let arr2 = Array(5);

// 3

console.log(arr2.length)

// 4

arr2 = [1, 2, 3, 4, 5]

console.log(arr2[0]) // first item

let middleItem = Math.round((arr2.length / 2))
console.log(middleItem) // middle item

console.log(arr2[arr2.length - 1]) // last item

// 5

let mixedDataTypes = [1, true, "String", { name: "john" }, null, [1, 2, 3]];
console.log(mixedDataTypes.length)

// 6

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7

console.log(itCompanies)

// 8 

console.log('Number of Companies: ' + itCompanies.length)

// 9

console.log(itCompanies[0]) // first company name

let middleCompany = Math.floor(itCompanies.length / 2)
console.log(itCompanies[middleCompany]) // middle company name

console.log(itCompanies[itCompanies.length - 1]) // last company name

// 10

for (const company of itCompanies) {
    console.log(company)
}

// 11

for (const company of itCompanies) {
    console.log(company.toUpperCase())
}

// 12

let companies = `${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`

console.log(companies)

// 13

let index = itCompanies.indexOf('Amazon')

if (index == -1) {
    console.log('Company is not found')
} else {
    console.log('Company found')
}

// 14

let oCompanies = []
for (const company of itCompanies) {
    if (company.search(/o+/) != -1) {
        oCompanies.push(company)
    }
}

console.log(oCompanies)

// 15

console.log(itCompanies.sort())

// 16

console.log(itCompanies.reverse())

// 17

console.log(itCompanies.slice(0, 3))

// 18

console.log(itCompanies.slice(itCompanies.length - 3))

// 19

console.log(itCompanies.slice(itCompanies.length / 2))

// 20

console.log(itCompanies.shift())

// 21

console.log(itCompanies.shift(itCompanies.length / 2))

// 22

console.log(itCompanies.shift(itCompanies.length - 1))

// 23

itCompanies = []

console.log(itCompanies)


/* LEVEL 2 */

// 1

const cnt = require('./country')

console.log(cnt.countries)

// 2

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

text = text.replace(/[.,]/g, '').split(' ');
console.log(text)
console.log(text.length)

// 3

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat')
console.log(shoppingCart)

shoppingCart.push('Sugar')
console.log(shoppingCart)

shoppingCart.splice(4, 1)
console.log(shoppingCart)

shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)

// 4

let check = cnt.countries.indexOf('Ethiopia')

if (check == -1) {
    console.log('It does not exist')
    cnt.countries.push('Ethopia')
} else {
    console.log('ETHOPIA')
}

// 5

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

let check2 = webTechs.indexOf('Sass')

if (check2 == -1) {
    webTechs.push('Sass')
    console.log(webTechs)
} else {
    console.log('Sass is a CSS Preprocessor.')
}

// 6

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = (frontEnd.toString()+ ',' + backEnd.toString()).split(',')

console.log(fullStack)


/* LEVEL 3 */

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// 1

ages.sort();
console.log(`Minimum Age: ${ages[0]} & Maximum Age: ${ages[ages.length-1]}`)

let median = Math.floor(ages.length/2)
let medianAge = (ages[median] + ages[median-1])/2
console.log(`Median Age: ${medianAge}`)

let sum = 0
for(const age of ages) {sum = sum + age}
let average = sum/ages.length
console.log(`Average Age: ${average}`)

let range = ages[ages.length-1] - ages[0]
console.log(`Range: ${range}`)

// 2

console.log(cnt.countries.slice(0,10))

// 3

console.log(cnt.countries[Math.floor(cnt.countries.length/2)])

// 4

if(cnt.countries.length % 2 == 0){
    let middleTerm = Math.ceil(cnt.countries.length/2)
    let cnt1 = cnt.countries.splice(0,middleTerm)
    console.log(cnt1)
    let cnt2 = cnt.countries.splice(-middleTerm)
    console.log(cnt2)
} else {
    cnt.countries.push('Iceland')
    console.log('Added one country')
    console.log(cnt.countries)
}

