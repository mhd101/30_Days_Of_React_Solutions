/* LEVEL 1 */

// 1

function fullName(firstName, lastName){
    return firstName + ' ' + lastName
}

console.log(fullName('mhd', '101'))

// 2

function addNumbers(a, b){
    return a + b;
}

console.log(addNumbers(1,2))

// 3

function areaOfCircle(radius){
    return (Math.PI * Math.pow(radius, 2)).toFixed(3)
}

console.log(areaOfCircle(2))

// 4

function convertCelciusToFahrenheit(degree){
    let fehrenheit = (degree * 9/5) + 32
    return fehrenheit
}

console.log(convertCelciusToFahrenheit(30))

// 5

function BMI(height, weight){
    let bmi = (weight / Math.pow(height,2)).toFixed(1)

    if(bmi < 18.5 || bmi > 0){
        console.log('UnderWeight')
    } else if(bmi >= 18.5 || bmi <=24.9){
        console.log('Normal Weight')
    } else if(bmi >= 25 || bmi <=29.9){
        console.log('Over Weight')
    } else if(bmi >= 30) {
        console.log('Obese')
    } else {
        console.log('Wrong Input')
    }
}

BMI(1.23,50)

// 6

function checkSeason(month){
    if(month.toLowerCase() == 'january' || month.toLowerCase() == 'december'){
        return 'Winter'
    } else  if(month.toLowerCase() == 'february' || month.toLowerCase() == 'march'){
        return 'Spring'
    } else if(month.toLowerCase() == 'april' || month.toLowerCase() == 'may' || month.toLowerCase() == 'june'){
        return 'Summer'
    } else if(month.toLowerCase() == 'july' || month.toLowerCase() == 'august' || month.toLowerCase() == 'september'){
        return 'Monsoon'
    } else if(month.toLowerCase() == 'october' || month.toLowerCase() == 'november'){
        return 'Autumn'
    } else {
        return 'Enter Correct Month!!'
    }
}

console.log(checkSeason('June'))


