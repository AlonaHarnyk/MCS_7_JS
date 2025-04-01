// GENERICS

// function logValue(data: number[] | string[]): void {
//     console.log(data)
// }

// logValue([1])
// logValue(['1'])
// // logValue({a: 1})

// function logValue<A>(data: A): void {
//     console.log(data)
// }

// // logValue<number>(1)
// // logValue<string>('1')
// // logValue({a: 1})

// const array: Array<string> = ['1', '2']

// logValue<number[]>([1, 2, 3])

// logValue(array)

// function logValue<X, Y>(data1: X, data2: Y): void {
//     console.log(data1)
//     console.log(data2)
// }

// logValue<number[], (number | string)[]>([1, 2, 3], [1, '2', '3'])

// I

// const numbers = [1, 2, 3]
// const letters = ['a', 'b', 'c']

// function reverseArray<T>(arr: T[]): T[] {
// return arr.reverse()
// }

// reverseArray<number>(numbers)
// reverseArray<string>(letters)

// II

// function getLength<T extends {length: number}>(data: T): number {
// return data.length
// }

// console.log(getLength('Hello'))
// console.log(getLength(['Hello']))
// // console.log(getLength(5)) error

// III

// interface Person {
//   name: string;
// }

// interface Address {
//   city: string;
// }

// const person: Person = {
//   name: "Ivan",
// };

// const address: Address = {
//   city: "Lviv",
// };

// function mergeObjects1<A, B>(a: A, b: B): A & B {
//   return { ...a, ...b };
// }

// console.log(mergeObjects1(person, address));

// function mergeObjects2<A, B>(a: A, b: B): A & B {
//   return Object.assign({}, a, b);
// }

// console.log(mergeObjects2(person, address));

// function mergeObjects3<A extends object, B extends object>(a: A, b: B): A & B {
//     return Object.assign(a, b);
//   }

// console.log(mergeObjects3(person, address));

// INTERFACE

// type User1 = {
//   name: string;
//   age: number;
// };

// interface User2 {
//   name: string;
//   age: number;
// }

// type SuperUser = User1 & { hobbies: string[] };

// interface SuperUser2 extends User2 {
//   hobbies: string[];
// }

// interface User2 {
//   email: string;
// }

// const user2: User2 = {
//   name: "Ann",
//   age: 40,
//   email: "abc@ukr.net",
// };

// OPERATORS

// typeof

// let value: string | number = 'Hello';

// console.log(typeof value) // 'string';

// value = 10

// console.log(typeof value) // 'number';

// in

// const user = {
//     name: 'Jhon'
// }

// console.log('name' in user) // true;
// console.log('age' in user) // false;

// instanceof

// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class Student {
//     name: string;
//     constructor(name: string) {
//       this.name = name;
//     }
//   }

// const user1 = new User('Olha')

// console.log(user1 instanceof User) // true
// console.log(user1 instanceof Student) // false

// const user2 = new Student('Olha')

// console.log(user1 instanceof User) // false
// console.log(user1 instanceof Student) // true

// class User1 {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class Student1 extends User1 {
//   name: string;
//   constructor(name: string) {
//     super(name);
//   }
// }

// const user3 = new User1("Anna");

// console.log(user3 instanceof User1) // true
// console.log(user3 instanceof Student1) // false

// const user4 = new Student1('Olha')

// console.log(user4 instanceof User1) // true
// console.log(user4 instanceof Student1) // true

// as

// let someValue: any = 'Hello!'
// let someValue: unknown = 'Hello!'
// console.log((someValue as string).length) // 6;

// is

// interface Bird {
//   fly(): void;
// }

// interface Fish {
//   swim(): void;
// }

// function isBird(animal: Bird | Fish): animal is Bird {
//   return "fly" in animal;
// }

// const someFunc = (animal: Bird | Fish) => {
//     if(!isBird(animal)) {
//         animal.swim();
//     }
// };

// CLASSES

// class User {
//   private email: string;
//   protected city: string;

//   constructor(
//     public name: string,
//     public readonly age: number,
//     email: string,
//     city: string
//   ) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//     this.city = city;
//   }

//   getEmail() {
//     console.log(this.email);
//   }
// }

// const user = new User("Ann", 20, "ann@ukr.net", "Kyiv");
// console.log(user.age);

// class Student extends User {
//   constructor(name: string, age: number, email: string, city: string) {
//     super(name, age, email, city);
//   }
//   getCity() {
//     console.log(this.city);
//   }

// //   getEmail() {
// //     console.log(this.email);
// //   }
// }

interface UserInterface {
  name: string;
  age: number;
  getUserInfo(): void;
}

// class User implements UserInterface {
//   constructor(public name: string, public age: number) {}
//   getUserInfo(): void {
//     console.log(`Name: ${this.name}, age: ${this.age}`);
//   }
// }

// const instance = new User('Ivan', 15)

// abstract class User implements UserInterface {
//   constructor(public name: string, public age: number) {}

//   getUserInfo(): void {
//     console.log(`Name: ${this.name}, age: ${this.age}`);
//   }
// }

// const instance = new User('Ivan', 15)

// class SuperUser extends User {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }
// }

// const instance = new SuperUser('Ivan', 15)