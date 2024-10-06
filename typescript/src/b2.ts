// Object and Function

let car: {
  brand: string
  year: number
} = {
  brand: 'Toyota',
  year: 2000
}

let car1: {
  brand: string
  year: number
} = {
  brand: 'Audi',
  year: 2023
}

let book = {
  title: 'Book',
  cost: 20
}
let pen = {
  title: 'Pen',
  cost: 10
}
let notebook = {
  title: 'Notebook'
}

const items: { readonly title: string; cost?: number }[] = [book, pen, notebook]

// error
// items[0].title = 'Book2'
let bike: { brand: string; year: number } = { brand: 'Bike', year: 2000 }
let laptop: { brand: string; year: number } = { brand: 'Dell', year: 2015 }
let laptop2: { brand: string; year: number } = { brand: 'HP', year: 2018 }

let product1 = { title: 'Product 1', price: 20 }
let product2 = { title: 'Product 1' }

const products: { title: string; price?: number }[] = [product1, product2]
products.push({ title: 'Product 3' })

// Function

function sayHi(name: string): string {
  return `Hello ${name}`
}

function calculateDiscount(price: number) {
  const hasDiscount = price >= 100
  if (hasDiscount) {
    return price * 0.85
  }
  return price * 0.9
}

function addThree(number: any) {
  let anotherNumber: number = 3
  return number + anotherNumber
}

const result = addThree(3)

const someValue = result
// someValue.myMethod()

const names: string[] = ['banana', 'orange', 'apple', 'cherry']

const checkExistName = (name: string): boolean => {
  return names.includes(name)
}

const checkName: boolean = checkExistName('apple')

function calculatePrice(price: number, discount?: number): number {
  return price * (1 - (discount || 0))
}

const discountedPrice = calculatePrice(100)

function calculateScore(
  initialScore: number,
  penaltyPoint: number = 0
): number {
  return initialScore - penaltyPoint
}

const finalScore = calculateScore(100, 5)
const scoreWithoutPenalty = calculateScore(300)

function sum(message: string, ...nums: number[]): string {
  return `${message} ${nums.reduce((acc, curr) => acc + curr * 2, 0)}`
}

let result2 = sum('The total is: ', 1, 2, 3, 4, 5, 6, 7)

function log(message: string): void {
  console.log(message)
}

log('Hello World')
function processInput(input: string | number): void {
  const objType = {
    string: 'String',
    number: 'Number'
  }
  if (typeof input === 'string') {
    console.log(`Processing string: ${input.toUpperCase()}`)
  }
  if (typeof input === 'number') {
    console.log(`Processing number: ${input * 2}`)
  }
}

// processInput('Hello World')
// processInput(20)

interface Employee {
  id: number
  name: string
  sayHello: () => void
}
function createEmployee({ id, name }: { id: number; name: string }): Employee {
  return {
    id,
    name,
    sayHello: () => {
      console.log(`Hello, my name is ${name}`)
    }
  }
}

const employee1 = createEmployee({ id: 1, name: 'John Doe' })

function createStudent(student: {
  id: number
  name: string
  [key: string]: any
}): void {
  console.log(
    `Welcome to the course. Student ID: ${student.id}, Name: ${student.name}`
  )
}
const alice = {
  id: 2,
  name: 'Alice',
  grade: 90
}

// createStudent(alice)
// createStudent({
//   id: 3,
//   name: 'Bob',
//   grade: 85
// })

function processData(
  input: string | number,
  config: {
    reverse: boolean
  } = {
    reverse: false
  }
) {
  if (typeof input === 'number') {
    return input * input
  } else {
    return config.reverse
      ? input.split('').reverse().join('').toUpperCase()
      : input.toUpperCase()
  }
}

let processed = processData('Hello World')
console.log('1::', processed)
processed = processData(10)
console.log('2::', processed)
processed = processData('Hello World', { reverse: true })
console.log('3::', processed)
