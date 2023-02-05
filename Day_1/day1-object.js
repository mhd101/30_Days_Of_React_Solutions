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


/* LEVEL 2 */

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// 1

let max = 0
let skilledPerson;

for(const u of Object.keys(users)){
    if(users[u].skills.length > max){
        max = users[u].skills.length
        skilledPerson = u;
    }
}
console.log(skilledPerson)

// 2


let loginCount = 0;
let pointCount = 0;

for(const u of Object.keys(users)){
  if(users[u].isLoggedIn == true){
    loginCount++
  }
  
  if (users[u].points >= 50){
    pointCount++
  }
}

console.log(loginCount)
console.log(pointCount)

// 3

console.log(users.Paul.skills.includes('MongoDB'))

for(const u of Object.keys(users)){
  if(users[u].skills.includes('MongoDB') && users[u].skills.includes('React') && users[u].skills.includes('Express') && users[u].skills.includes('Node')){
    console.log(u)
  }
}


// 4

const users2 = Object.assign({}, users)


users2.mhd = {
  email: 'mhd@mhd.com',
  skills: ['HTML', 'CSS', 'Javascript'],
  age: 21,
  isLoggedIn: false,
  points: 80
}

console.log(users) // original array
console.log(users2) // modified array

// 5

console.log(Object.entries(users))

// 6

console.log(Object.values(users))

// 7

for(const c of Object.keys(countriesData)){
  let printData = `Country Name: ${countriesData[c].name}\nCapital: ${countriesData[c].capital}\nPopulation Count: ${countriesData[c].population}\nLanguages: ${countriesData[c].languages}\n`

  console.log(printData)
}


/* LEVEL 3 */

