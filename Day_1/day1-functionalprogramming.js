/* EXERCISES */

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

let result ;

// 1

products.forEach(p => console.log(p.price))

// 2

products.forEach(p => {
    if(p.price == '' || p.price == ' '){
        console.log(`The price of ${p.product} is unknown.`)
    } else {
        console.log(`The price of ${p.product} is ${p.price} euros.`)
    }
})

// 3

let totalPrice = 0
 products.forEach((p) =>{
    if(!(p.price == '' || p.price == ' ')){
        return totalPrice += p.price
    }
})

console.log(totalPrice)

// 4

let prices = products.map(p => p.price)

console.log(prices)

// 5

prices = products.filter(p => {
    if(!(p.price == '' || p.price == ' ')){
        return p
    }
})

console.log(prices);

// 6

prices = products.map(p => p.price).filter(q => {
    if(!(q == '' || q == ' ')) {
        return q
    }
}).reduce((prev, price) => prev += price, 0)

console.log(prices)

// 7

let sumOfAllProducts = products.reduce((sum, product) => {
    if(!(product.price == '' || product.price == ' ')){
        return sum += product.price
    }
    return sum
},0)

console.log(sumOfAllProducts)

// 8

let firstProduct = products.find( p => {
    if(p.price == '' || p.price == ' '){
        return p.product
    }
})

console.log(firstProduct)

// 9

let firstProductIndex = products.findIndex( p => {
    if(p.price == '' || p.price == ' '){
        return p.product
    }
})

console.log(firstProductIndex)

// 10

let productWithoutPriceValue = products.some( p => {
    if(p.price == '' || p.price == ' '){
        return p
    }
})

console.log(productWithoutPriceValue)

// 11

let productWithPriceValue = products.every( p => {
    if(p.price == typeof 1){
        return p
    }
})

console.log(productWithPriceValue)


// 12

// forEach :- It iterates the elements of any array and takes parameter index, item, array

// map:- It returns the modified version of an array

// filter:- It returns the filtered items from an array

// reduce :- It is used to combine all the values and produce a single value


// 13

// filter:- It returns the filtered items from an array

// find:- It returns the first occurence of an item instead of an array

// findIndex:- It returns the first index of the first occurence of an item


// 14

// some:- It return boolean value. It returns true if any elements satisfy the condition else false

// every:- It retun boolean value. It returns false if any elements doesn't satisfy the condition else true

