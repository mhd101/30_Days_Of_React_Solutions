/* LEVEL 1 */

// 1

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName
}

console.log(fullName('mhd', '101'))

// 2

function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(1, 2))

// 3

function areaOfCircle(radius) {
    return (Math.PI * Math.pow(radius, 2)).toFixed(3)
}

console.log(areaOfCircle(2))

// 4

function convertCelciusToFahrenheit(degree) {
    let fehrenheit = (degree * 9 / 5) + 32
    return fehrenheit
}

console.log(convertCelciusToFahrenheit(30))

// 5

function BMI(height, weight) {
    let bmi = (weight / Math.pow(height, 2)).toFixed(1)

    if (bmi < 18.5 || bmi > 0) {
        console.log('UnderWeight')
    } else if (bmi >= 18.5 || bmi <= 24.9) {
        console.log('Normal Weight')
    } else if (bmi >= 25 || bmi <= 29.9) {
        console.log('Over Weight')
    } else if (bmi >= 30) {
        console.log('Obese')
    } else {
        console.log('Wrong Input')
    }
}

BMI(1.23, 50)

// 6

function checkSeason(month) {
    if (month.toLowerCase() == 'january' || month.toLowerCase() == 'december') {
        return 'Winter'
    } else if (month.toLowerCase() == 'february' || month.toLowerCase() == 'march') {
        return 'Spring'
    } else if (month.toLowerCase() == 'april' || month.toLowerCase() == 'may' || month.toLowerCase() == 'june') {
        return 'Summer'
    } else if (month.toLowerCase() == 'july' || month.toLowerCase() == 'august' || month.toLowerCase() == 'september') {
        return 'Monsoon'
    } else if (month.toLowerCase() == 'october' || month.toLowerCase() == 'november') {
        return 'Autumn'
    } else {
        return 'Enter Correct Month!!'
    }
}

console.log(checkSeason('June'))


/* LEVEL 2 */

// 1

function solveQuadraticEquations(a, b, c) {
    let discriminant = Math.pow(b, 2) - 4 * a * c

    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a)
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a)

        console.log(`{${root1}, ${root2}}`)
    } else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a)
        console.log(`{${root1}, ${root2}}`)
    } else {
        let realPart = (-b / (2 * a).toFixed(2))
        let imagPart = (Math.sqrt(-discriminant) / (2 * a).toFixed(2))
        console.log(`{${realPart}+${imagPart}i, ${realPart}-${imagPart}i}`)
    }
}

solveQuadraticEquations(1, 4, 5)

// 2

function printArray(array) {
    for (const elements of array) {
        console.log(elements)
    }
}

printArray([1, 2, 3, 4, 5])

// 3

function showDateTime() {
    let now = new Date;

    let date = now.getDate()
    let month = now.getMonth()
    let year = now.getFullYear()
    let hours = now.getHours()
    let minutes = now.getMinutes();

    let dd = (date < 10) ? `0${date}` : `${date}`
    let mm = (month < 10) ? `0${month}` : `${month}`
    let yyyy = year
    let hh = (hours < 10) ? `0${hours}` : `${hours}`
    let min = (minutes < 10) ? `0${minutes}` : `${minutes}`

    let dateTime = `${dd}/${mm}/${yyyy} ${hh}:${min}`
    console.log(dateTime)
}

showDateTime()

// 4

function swapValues(a, b) {
    let temp = a
    a = b
    b = temp
    console.log(a, b)
}

swapValues(0, 1)
swapValues(2, 7)
swapValues(3, -3)

// 5

function reverseArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i])
    }

}

reverseArray([1, 2, 3, 4, 5])
reverseArray(['A', 'B', 'C'])

// 6

function capitalizeArray(array) {
    for (const elements of array) {
        console.log(elements.toUpperCase())
    }
}

capitalizeArray(['alpha', 'beta', 'gamma'])

// 7

function addItem(item) {
    let array = []
    array.push(item)

    return array
}

console.log(addItem('hello'))

// 8

function removeItem(array, index) {
    array.splice(index, 1)
    return array
}

console.log(removeItem([1, 2, 3, 4, 5], 2))

// 9

function evenAndOdds(num) {
    let even = 0
    let odd = 0
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            even++
        } else {
            odd++
        }
    }
    return `Even: ${even}\nOdd: ${odd}`

}

console.log(evenAndOdds(100))

// 10

function sum(...arguments) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)

}

sum(1, 2, 3)
sum(1, 2, 3, 4)

// 11

userIdGenerator = () => {
    let alphaNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let userIds = []

    for (let i = 0; i < 7; i++) {
        let random = Math.floor((Math.random() * alphaNum.length))
        userIds.push(alphaNum[random])
    }

    return userIds.join('')

}

console.log(userIdGenerator())




/* LEVEL 3 */

// 1

// let numberOfCharacters = prompt('Enter number of Characters to be generated')
// let numberOfIds = prompt('Enter number of ids to be generated')

// userIdGeneratorByUser = () => {
//     let alphaNum = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     let arr = []

//     for (let i = 0; i < numberOfIds; i++) {
//         let userId = ''
//         for (let j = 0; j < numberOfCharacters; j++) {
//             let random = Math.floor((Math.random() * alphaNum.length))
//             userId = userId + alphaNum[random]
//         }
//         arr.push(userId)
//     }
//     console.log(arr)
// }

// userIdGeneratorByUser()

// 2

generateColors = (color, noOfColors) => {

    hexa = () => {
        let arr = []
        let hex = '0123456789abcdef'
        for (let i = 0; i < noOfColors; i++) {
            let colors = ''
            for (let i = 0; i < 6; i++) {
                let random = Math.floor(Math.random() * hex.length)
                colors = colors + hex[random]
            }
            arr.push(`#${colors}`)
        }
        console.log(arr)
    }

    rgb = () => {
        let arr = []

        for (let i = 0; i < noOfColors; i++) {
            let rgb = []
            for (let i = 0; i < 3; i++) {
                let random = Math.floor(Math.random() * 256)

                rgb.push(random)
            }
            arr.push(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`)
        }
        console.log(arr)
    }

    if (color.toLowerCase() == 'hexa') {
        hexa()
    } else if (color.toLowerCase() == 'rgb') {
        rgb()
    } else {
        console.log('Wrong Input!!')
    }

}

generateColors('hexa', 5)
generateColors('rgb', 2)

// 3

shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        // random index from 0 to i
        let random = Math.floor(Math.random() * (i + 1))
        // store the value of random index into temp
        let temp = array[random]
        // store the value of i index into random index
        array[random] = array[i]
        // store the value of temp into i index
        array[i] = temp
    }
    return array
}

arr = [1, 2, 3, 4, 5]
console.log(shuffleArray(arr))

// 4

function factorial(number) {
    if (number < 0) {
        return 'number need to be positive'
    }

    if (number == 0 || number == 1) {
        return 1
    } else {
        return number * factorial(number - 1)
    }
}

console.log(factorial(5))

// 5

function isEmpty(value) {
    if (value === undefined || value === null || value === '') {
        return 'empty'
    } else {
        return 'not empty'
    }
}

console.log(isEmpty('hello'))
console.log(isEmpty(true))
console.log(isEmpty(1))
console.log(isEmpty({}))
console.log(isEmpty([]))
console.log(isEmpty())

// 6

average = (array) => {
    let sum = 0
    let count = array.length
    flag = true

    for (const elements of array) {
        if (typeof elements == typeof 1) {
            sum += elements
        } else {
            flag = false
        }
    }

    avg = sum / count

    if (flag == false) {
        console.log('Array doesn\'t contain Numbers')
    } else {
        console.log(avg.toFixed(2))
    }
}

let numbers = [1, 2, 3, 4, 5]
let numbers2 = [1, 2, 3, 4, 'five']
average(numbers)
average(numbers2)






