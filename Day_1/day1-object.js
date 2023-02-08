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
dog.bark = function () {
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
dog.getDogInfo = function () {
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

for (const u of Object.keys(users)) {
  if (users[u].skills.length > max) {
    max = users[u].skills.length
    skilledPerson = u;
  }
}
console.log(skilledPerson)

// 2


let loginCount = 0;
let pointCount = 0;

for (const u of Object.keys(users)) {
  if (users[u].isLoggedIn == true) {
    loginCount++
  }

  if (users[u].points >= 50) {
    pointCount++
  }
}

console.log(loginCount)
console.log(pointCount)

// 3

console.log(users.Paul.skills.includes('MongoDB'))

for (const u of Object.keys(users)) {
  if (users[u].skills.includes('MongoDB') && users[u].skills.includes('React') && users[u].skills.includes('Express') && users[u].skills.includes('Node')) {
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

for (const c of Object.keys(countriesData)) {
  let printData = `Country Name: ${countriesData[c].name}\nCapital: ${countriesData[c].capital}\nPopulation Count: ${countriesData[c].population}\nLanguages: ${countriesData[c].languages}\n`

  console.log(printData)
}


/* LEVEL 3 */

// 1

const personAccount = {
  firstName: 'John',
  lastName: 'Doe',
  incomes: [{ category: 'Affiliate', income: 2000 }, { category: 'Course', income: 5000 }, { category: 'Salary', income: 10000 }],
  expenses: [{ category: 'House Rent', expense: 2000 }, { category: 'Food', expense: 1000 }, { category: 'Other', expense: 2000 }],
  totalIncome: function () {
    let total = 0
    for (const i of this.incomes) {
      total = total + i.income
    }
    return total;
  },
  totalExpense: function () {
    let total = 0
    for (const e of this.expenses) {
      total += e.expense;
    }
    return total;
  },
  addIncome: function (category, income) {
    this.incomes.push({ category: category, income: income });
  },
  addExpense: function (category, expense) {
    this.expenses.push({ category: category, expense: expense });
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
  accountInfo: function () {
    return `Name: ${this.firstName + ' ' + this.lastName}\nAccount Balance: ${this.accountBalance()}`;
  }

}

personAccount.addIncome('Youtube', 500)
personAccount.addExpense('Medical', 1000)
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountInfo())

// 2

const usersDatabase = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]


function signUp(username, email, password) {
  let flag = false;
  usersDatabase.forEach(x => {
    if (x.username.toLowerCase() == username.toLowerCase()) {
      flag = true
    }
  })
  if (flag == true) {
    console.log('User Already Exists!!')
  } else {

    // TimeStamp is created when the user signUp to know when his/her id has been created.
    function createdAt() {
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

      let ampm = (hh >= 12) ? 'PM' : 'AM'

      let createdAt = `${dd}/${mm}/${yyyy} ${hh}:${min} ${ampm}`

      return createdAt
    }

    // newUser Object
    let newUser = {
      _id: 'cmis8f',
      username: username,
      email: email,
      password: password,
      createdAt: createdAt(),
      isLoggedIn: false,
    }

    // Pushing newUser to usersDatabase array
    usersDatabase.push(newUser)
  }
}

function signIn(username, password) {
  let flag = false
  let user
  let pass
  usersDatabase.forEach(x => {
    if (x.username.toLowerCase() == username) {
      flag = true
      user = x.username
      pass = x.password

    }
  })

  if (flag == true) {
    if (user.toLowerCase() == username && pass == password) {
      usersDatabase.forEach(x => {
        if (x.username == user) {
          x.isLoggedIn = true
        }

      })
      console.log('User Login Successfully!')
    } else if (user.toLowerCase() != username || pass != password) {
      console.log('Username/Password are Incorrect!')
    }
  } else {
    console.log('User doesn\'t exist in the database')
  }
}


// User is creating an account... 
signUp('mhd', 'mhd101', '123456')


// Account Created!
console.log(usersDatabase)

// Signing user
signIn('mhd', '123456')

// User mhd isLoggedIn = true
console.log(usersDatabase)


// 3

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'tv',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]

// 3.1

function rateProduct(username, password, productName, rating) {
  signIn(username.toLowerCase(), password)
  usersDatabase.forEach(x => {
    if (x.username == username) {
      products.forEach(p => {
        if (p.name == productName.toLowerCase()) {
          p.ratings.push({ userId: x._id, rate: rating })
        }
      })
    }
  })
}

rateProduct('mhd', '123456', 'TV', 4.5)

console.log(products)

// 3.2

function averageRating(productName) {
  let sum = 0
  let count = 0
  products.forEach(x => {
    if (x.name == productName.toLowerCase()) {
      x.ratings.forEach(a => {
        sum += a.rate
        count++
      })
    }
  })
  const avg = sum / count
  console.log(`Average rating of Product ${productName} is ${avg}`)
}

averageRating('tv')

// 4

function likeProduct(username, password, productName) {
  signIn(username.toLowerCase(), password)
  usersDatabase.forEach(x => {
    if (x.username.toLowerCase() == username) {
      products.forEach(p => {
        if (p.name.toLowerCase() == productName.toLowerCase())
          if (p.likes.includes(x._id)) {
            let index = p.likes.indexOf(x._id)
            p.likes.splice(index, 1)
          } else {
            p.likes.push(x._id)
          }

      })
    }
  })
}

likeProduct('asab', '123456', 'tv') // remove the asab likes from the product 

likeProduct('mhd', '123456', 'tv') // add the likes to the product from mhd

likeProduct('mhd', '123456', 'tv') // remove the mhd likes from the product

console.log(products)





