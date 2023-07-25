var age;
age = 24;
// age = 'nasser';
console.log(age);
var userName;
userName = 'Nasser Khan';
// userName = 3;
console.log(userName);
var isMarried;
isMarried = true;
console.log(isMarried);
var hobbies;
hobbies = ['cricket', 'swimming', 'vollyball'];
console.log(hobbies);
// person = {
//     name:'Nasser Khan',
//     age:24
// }
// person = {
//     name:'Mohit Malve',
//     age: 24
// } this will override first person object
// console.log(person);
var person1 = {
    name: 'Nasser Khan',
    age: 24
};
var person2 = {
    name: 'Mohit Malve',
    age: 24
};
var person3 = {
    name: 'Ayush Kushwah',
    age: 25
};
var personList;
personList = [person1, person2, person3];
console.log(personList);
var jaime = {
    firstName: 'Jaime',
    lastName: 'Lennister',
    age: 35,
    greet: function () {
        console.log('the king slayer');
    },
};
var nasser = {
    firstName: 'Nasser',
    lastName: 'Khan',
    age: 24,
    greet: function () {
        console.log('Welcom ', this.firstName);
    },
};
nasser.greet();
jaime.greet();
