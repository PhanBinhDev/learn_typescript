// Union

let tax: number | string = 10

tax = '10'

let reqStatus: 'pending' | 'success' | 'error' = 'pending'

reqStatus = 'pending'

//
let notSure: any = 4

notSure = 'hello'
notSure = function () {}

notSure = true

const books = ['1984', 'To Kill a Mockingbird', 'Pride and Prejudice']

let foundBook: string | undefined

for (let book of books) {
  if (book === '1984') {
    foundBook = book
    foundBook = foundBook.toUpperCase()
    break
  }
}

console.log(foundBook?.length)

// Practice Union Type

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing'

orderStatus = 'shipped'
orderStatus = 'delivered'

// Array

let prices: number[] = [100, 70.2, 90]
// prices.push()

let fruits: string[] = ['apple', 'banana', 'orange']

let mixedArray: (number | string | boolean)[] = [...prices, ...fruits]

mixedArray.push(true)

let temperatures: number[] = [20, 25, 30]
// temperatures.push('hot')

let colors: string[] = ['yellow', 'green', 'blue']
// colors.push(123)

let mixed: (string | number)[] = [...temperatures, ...colors]
