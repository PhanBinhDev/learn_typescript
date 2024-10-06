// Tuples and Enums

// let person: [string, number] = ['john', 25]

// let date: readonly [number, number, number] = [3, 12, 2024]
// function getPerson(): [string, number] {
//   return ['John', 25]
// }

// let randomPerson = getPerson()

// // console.log(randomPerson[0])
// // console.log(randomPerson[1])

// let susan: [string, number?] = ['susan'] // Optional

// // Enum

// enum ServerResponseStatus {
//   OK = 200,
//   BAD_REQUEST = 400,
//   UNAUTHORIZED = 401,
//   FORBIDDEN = 403,
//   NOT_FOUND = 404,
//   SERVER_ERROR = 500,
//   TIMEOUT = 504
// }

// console.log(ServerResponseStatus)

// interface ServerResponse {
//   result: ServerResponseStatus
//   data: string[]
// }

// function getData(): ServerResponse {
//   return {
//     result: 504,
//     data: ['Data 1', 'Data 2', 'Data 3']
//   }
// }

// function getData2(): ServerResponse {
//   return {
//     result: 200,
//     data: ['Data 1', 'Data 2', 'Data 3']
//   }
// }

// let response: ServerResponse = getData()
// // console.log(response)

// // Challenge
// enum UserRole {
//   Admin,
//   Manager,
//   Employee
// }

// type User = {
//   id: number
//   name: string
//   role: UserRole
//   contact: [string, string]
// }

// function createUser(user: User): User {
//   return user
// }

// let user1: User = createUser({
//   id: 1,
//   name: 'Alice',
//   role: UserRole.Admin,
//   contact: ['123 Main St', '555-555-5555']
// })

// // console.log(user1)
// // type assertion
// let someValue: any = 'This is a string'
// let strLength: number = (someValue as string).length

// // console.log(strLength)

// type Bird = {
//   name: string
// }

// let birdString = '{"name": "Eagle"}'
// let dogString = '{"breed": "Poodle"}'

// let birdObject = JSON.parse(birdString)
// let dogObject = JSON.parse(dogString)

// let bed = birdObject as Bird
// let dog = dogObject as Bird

// enum Status {
//   Pending = 'pending',
//   Declined = 'declined'
// }

// type User = {
//   name: string
//   status: Status
// }

// // save Status.Pending in the DB as a string (pending)
// // retrieve string from the DB
// const statusValue = 'pending'

// const user: User = {
//   name: 'John',
//   status: statusValue as Status
// }

// // Type unknown
// let unKnownValue: unknown

// unKnownValue = '123'
// unKnownValue = 12
// unKnownValue = [123, 123]
// unKnownValue = 12.2334

// if (typeof unKnownValue === 'number') {
//   unKnownValue.toFixed(2)
// }

// try {
//   // unKnownValue.toUpperCase()
//   throw new Error('There was an error')
// } catch (error: unknown) {
//   console.log(error)
// }

// let someValue: never = 0

// type Theme = 'light' | 'dark'

// function checkTheme(theme: Theme): void {
//   if (theme === 'light') {
//     console.log('The theme is light')
//     return
//   }
//   if (theme === 'dark') {
//     console.log('The theme is dark')
//     return
//   }
//   theme // never
// }

// enum Color {
//   Red,
//   Blue,
//   Green
// }

// function getColorName(color: Color) {
//   switch (color) {
//     case Color.Red:
//       return 'Red'
//     case Color.Blue:
//       return 'Blue'
//     case Color.Green:
//       return 'Green'
//     default:
//       let unexpectedColor: never = color
//       return unexpectedColor
//   }
// }

// console.log(getColorName(Color.Red))
// console.log(getColorName(Color.Blue))
// console.log(getColorName(Color.Green))
// console.log(getColorName('Black'))
const susan = 'susan'
import newStudent, { person, sayHello, Student } from './actions'

sayHello('Typescript')

console.log(newStudent)

const anotherStudent: Student = {
  name: 'Jane',
  age: 25
}
