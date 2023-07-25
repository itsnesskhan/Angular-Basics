let age: number ;
age = 24;
// age = 'nasser';
console.log(age);

let userName: string;
userName = 'Nasser Khan';
// userName = 3;
console.log(userName);

let isMarried:boolean;
isMarried = true;
console.log(isMarried)

let hobbies:string[];
hobbies = ['cricket','swimming','vollyball'];
console.log(hobbies);

interface person {
    name:string,
    age:number
}

// person = {
//     name:'Nasser Khan',
//     age:24
// }
// person = {
//     name:'Mohit Malve',
//     age: 24
// } this will override first person object


// console.log(person);

const person1:person = {
    name: 'Nasser Khan',
    age: 24
}

const person2:person = {
    name: 'Mohit Malve',
    age: 24
}

const person3:person = {
    name: 'Ayush Kushwah',
    age: 25
}

let personList:person[];

personList = [person1, person2, person3];
console.log(personList);

interface human{
    firstName:string,
    lastName:string,
    age:number,
    greet: ()=>void,
}

// same thing we can do with type alias
type humanAlias = {
    firstName:string,
    lastName:string,
    age:number,
    greet: ()=>void,
}


const jaime:humanAlias = {
    firstName:'Jaime',
    lastName:'Lennister',
    age: 35,
    greet() {
        console.log('the king slayer')
    },
}

const nasser:human = {
    firstName: 'Nasser',
    lastName: 'Khan',
    age: 24,
    greet() {
        console.log('Welcom ',this.firstName);
    },
}

nasser.greet();
jaime.greet();