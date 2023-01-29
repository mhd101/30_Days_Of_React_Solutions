/* LEVEL 1 */

// 1

let arr = [];

// 2

let arr2 = Array(5);

// 3

console.log(arr2.length)

// 4

arr2 = [1,2,3,4,5]

console.log(arr2[0]) // first item

let middleItem = Math.round((arr2.length/2))
console.log(middleItem) // middle item

console.log(arr2[arr2.length-1]) // last item

// 5

let mixedDataTypes = [1, true, "String", {name: "john"}, null, [1,2,3]];
console.log(mixedDataTypes.length)

// 6

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7

console.log(itCompanies)

// 8 

console.log('Number of Companies: ' + itCompanies.length)

// 9

console.log(itCompanies[0]) // first company name

let middleCompany = Math.floor(itCompanies.length/2)
console.log(itCompanies[middleCompany]) // middle company name

console.log(itCompanies[itCompanies.length-1]) // last company name

// 10

for (const company of itCompanies){
    console.log(company)
}

// 11

for (const company of itCompanies){
    console.log(company.toUpperCase())
}

// 12

let companies = `${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`

console.log(companies)

// 13

let index = itCompanies.indexOf('Amazon')

if (index == -1 ){
    console.log('Company is not found')
} else {
    console.log('Company found')
}

// 14

let oCompanies = []
for(const company of itCompanies){
    if(company.search(/o+/) != -1){
        oCompanies.push(company)
    }
}

console.log(oCompanies)

// 15

console.log(itCompanies.sort())

// 16

console.log(itCompanies.reverse())

// 17

console.log(itCompanies.slice(0,3))

// 18

console.log(itCompanies.slice(itCompanies.length-3))

// 19

console.log(itCompanies.slice(itCompanies.length/2))

// 20

console.log(itCompanies.shift())

// 21

console.log(itCompanies.shift(itCompanies.length/2))

// 22

console.log(itCompanies.shift(itCompanies.length-1))

// 23

itCompanies = []

console.log(itCompanies)


