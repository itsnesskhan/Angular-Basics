class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  
  // Create Person instances
  const personObj1 = new Person("Alice", 30);
  const personObj2 = new Person("Bob", 25);
  const personObj3 = new Person("Charlie", 22);
  
  // Create an array of type Person and add the instances to it
  const personsArray: Person[] = [personObj1, personObj2, personObj3];
  
  console.log(personsArray);
  

  //union type
let fullname: string | null ;
fullname = 'Nasser Khan';
fullname = null;

// type safe function

function insertAtBeginning(array:any, value:any): any{
    let updatedArray = [value, ...array];
    return updatedArray;
}

let updatedArray = insertAtBeginning([3,4,6,5],2);
console.log(updatedArray);
// console.log(updatedArray.split('')); no waring at compile time

function insertAtBeginning2<T>(array:T[], value:T){
    const updatedArray = [value, ...array];
    return updatedArray;
}

let updatedArray2 = insertAtBeginning2([3,4,6,5],2);
console.log(updatedArray2);
// console.log(updatedArray2.split('')); waring at compile time



