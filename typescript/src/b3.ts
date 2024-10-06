// Alias and Interface

type User = {
  id: number
  name: string
  isActive: boolean
}

const john: User = {
  id: 1,
  name: 'John Doe',
  isActive: true
}

function createUser(user: User): User {
  if (!user.id || typeof user.id !== 'number') {
    throw new Error('Invalid user ID')
  }
  return user
}

type Theme = 'light' | 'dark' | 'system'

let theme: Theme = 'light'

const setTheme = (t: Theme) => {
  theme = t
}

setTheme('system')

// type Employee = { id: number; name: string; department: string }

// type Manager = { id: number; name: string; employees: Employee[] }

// type Staff = Employee | Manager

// function printStaffDetails(staff: Staff) {
//   if ('employees' in staff) {
//     console.log(
//       `${staff.name} is a manager and has ${staff.employees.length} employees`
//     )
//   } else {
//     console.log(`${staff.name} is an employee in the ${staff.department}`)
//   }
// }
// const alice: Employee = {
//   id: 3,
//   name: 'Alice',
//   department: 'Marketing'
// }

// const bob: Employee = {
//   id: 4,
//   name: 'Bob',
//   department: 'Sales'
// }
// const jane: Manager = {
//   id: 2,
//   name: 'Jane Doe',
//   employees: [alice, bob]
// }

// printStaffDetails(alice)
// printStaffDetails(jane)

type Book = { id: number; name: string; price: number }
type Discounted = Book & { discount: number }
const book1: Book = {
  id: 1,
  name: 'Book 1',
  price: 10
}

const book2: Book = {
  id: 2,
  name: 'Book 2',
  price: 20
}

const discountBook: Discounted = {
  id: 3,
  name: 'Discount Book',
  price: 5,
  discount: 0.2
}

type Library = {
  books: Book[]
  getBook: (id: number) => Book | string
  addBook: (book: Book) => void
  removeBookById: (id: number) => Book | string
}

const createLibrary = (): Library => {
  const books: Book[] = [book1, book2]
  return {
    books,
    getBook: (id: number): Book | string => {
      const foundBook = books.find((b) => b.id === id)
      if (!foundBook) {
        return 'Book not found in library'
      }
      return foundBook
    },
    addBook: (book: Book): void => {
      books.push(book)
    },
    removeBookById: (id: number): Book | string => {
      const index = books.findIndex((b) => b.id === id)
      if (index === -1) {
        return 'Book not found in library'
      }
      return books.splice(index, 1)[0]
    }
  }
}

const library = createLibrary()

// library.addBook = null
// library.addBook(book1)
// library.addBook(book2)

const propName = 'age'

type Animal = {
  [propName]: number
}

let tiger: Animal = { [propName]: 5 }

// Interface
interface Book2 {
  readonly isbn: number
  title: string
  author: string
  genre?: string
  print(): void
  printMessage(message: string): string
  printSomething?: (something: number) => number
}

const deepWork: Book2 = {
  isbn: 123,
  title: 'deep work',
  author: 'cal newport',
  genre: 'self-help',
  print() {
    console.log(`Title ${this.title}`)
  },
  printMessage(message) {
    return `Title: ${this.title}, Message: ${message}`
  }
}

// deepWork.print()
// console.log(deepWork.printMessage('Deep work'))

// Challenge

interface Computer {
  readonly id: number
  brand: string
  ram: number
  storage?: number
  // method
  upgradeRam: (value: number) => number
}

const myConputer: Computer = {
  id: 1,
  brand: 'MSI',
  ram: 16,
  upgradeRam: function (value: number): number {
    return (this.ram += value)
  }
}

// myConputer.upgradeRam(8)
// console.log(myConputer)

// interface Person {
//   name: string
//   getDetails(): string
// }

// interface DogOwner {
//   dogName: string
//   getDogDetails(): string
// }

// interface Person {
//   age: number
// }

// const person: Person = {
//   name: 'John',
//   age: 20,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`
//   }
// }

// // console.log(person.getDetails())

// interface Employee extends Person {
//   employeeId: number
// }

// const employee: Employee = {
//   name: 'John',
//   age: 30,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`
//   },
//   employeeId: 123
// }

// interface Manager extends Person, DogOwner {
//   managePeople(): void
// }

// const manager: Manager = {
//   name: 'Jane',
//   age: 40,
//   dogName: 'ex',
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}, DogName: ${this.dogName}`
//   },
//   getDogDetails() {
//     return `Dog Name: ${this.dogName}`
//   },
//   managePeople() {
//     console.log('Managing people')
//   }
// }

// console.log(manager)

// Challenge
interface Person {
  name: string
}

interface DogOwner extends Person {
  dogName: string
}

interface Manager extends Person {
  managePeople(): void
  delegateTasks(): void
}

function getEmployee(): Person | DogOwner | Manager {
  const randomNumber = Math.random()
  if (randomNumber < 0.33) {
    return {
      name: 'John'
    }
  }
  if (randomNumber < 0.66) {
    return {
      name: 'Jahn',
      dogName: 'John' + 'myDog'
    }
  }

  return {
    name: 'Jane',
    managePeople() {
      console.log('Managing people')
    },
    delegateTasks() {
      console.log('Delegate tasks')
    }
  }
}

const employee = getEmployee()

// Type Guard
function isManager(obj: Person | DogOwner | Manager): obj is Manager {
  return 'managePeople' in obj
}

// if (isManager(employee)) {
//   employee.managePeople()
// }
