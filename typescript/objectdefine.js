var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
// Create Person instances
var personObj1 = new Person("Alice", 30);
var personObj2 = new Person("Bob", 25);
var personObj3 = new Person("Charlie", 22);
// Create an array of type Person and add the instances to it
var personsArray = [personObj1, personObj2, personObj3];
console.log(personsArray);
//union type
var fullname;
fullname = 'Nasser Khan';
fullname = null;
// type safe function
function insertAtBeginning(array, value) {
    var updatedArray = __spreadArray([value], array, true);
    return updatedArray;
}
var updatedArray = insertAtBeginning([3, 4, 6, 5], 2);
console.log(updatedArray);
console.log(updatedArray.split(''));
