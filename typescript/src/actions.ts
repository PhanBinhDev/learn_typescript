export function sayHello(name: string): void {
  console.log(`Hello, ${name}!`)
}

export let person = 'Bình'

export type Student = {
  name: string
  age: number
}

const newStudent: Student = {
  name: 'peter',
  age: 24
}

export default newStudent
