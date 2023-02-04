/* LEVEL 1 */

// 1

const dog = {}

// 2

console.log(dog)

// 3

dog.name = 'Rambo'
dog.legs = 4
dog.color = 'black'
dog.age = 6
dog.bark = function(){
    return 'woof woof'
}

// 4

console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())

// 5

dog.breed = 'German Shephard'
dog.getDogInfo = function(){
    return `Dog Name: ${dog.name}\nDog Age: ${dog.age}\nDog Color: ${dog.color}`
}

console.log(dog.getDogInfo())

