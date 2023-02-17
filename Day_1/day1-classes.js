/* LEVEL 1 */

// 1

class Animal {
    constructor(name, age, color, legs = 4){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    getAnimalInfo(){
        let String = `Animal: ${this.name}\nAge: ${this.age}\nColor: ${this.color}\nLegs: ${this.legs}`
        return String
    }
}

// 2

class Dog extends Animal {

}

const dog = new Dog('Max', 5, 'Black')
console.log(dog.getAnimalInfo())

console.log('-------------------')

class Cat extends Animal {

}

const cat = new Cat('Luna', 3, 'White', 4)
console.log(cat.getAnimalInfo())

console.log('-------------------')


/* LEVEL 2 */

// 1

class Cat2 extends Animal {
    constructor(name, age, color, breed, legs = 4 ){
        super(name, age, color, legs)
        this.breed = breed
    }

    // overriding method
    getAnimalInfo(){
        let String = `Animal: ${this.name}\nAge: ${this.age}\nColor: ${this.color}\nLegs: ${this.legs}\nBreed: ${this.breed}`
        return String
    }


}

const cat2 = new Cat2('Lucy', 4, 'Brown','American')
console.log(cat2.getAnimalInfo())

console.log('-------------------')


/* LEVEL 3 */

// 1

class Statistics {
    agesArray = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

    count(){
        let count= 0
        for(const n of this.agesArray){
            count++
        }
        return count
    }

    sum(){
        let sum = 0 
        this.agesArray.forEach(x => sum += x)
        return sum
    }

    min(){
        let min = this.agesArray.reduce((min, age) => {
            if( min == 0 || age < min){
                return age
            }
            return min
        },0)

        return min
    }

    max(){
        let max = this.agesArray.reduce((max, ages) => {
            if (ages > max) {
                return ages
            }
            return max
        }, 0)

        return max
    }

    range(){
        let range = Math.max(...this.agesArray) - Math.min(...this.agesArray)
        return range
    }

    


}




const statistics = new Statistics()

console.log('Count:',statistics.count())
console.log('Sum:', statistics.sum())
console.log('Min:', statistics.min())
console.log('Max:', statistics.max())
console.log('Range:', statistics.range())


