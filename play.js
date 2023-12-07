const hobbies = ["sports","cooking"];
const copied = [...hobbies, ...["gaming"]];
console.log(copied);

const person = {name: "Dawid", age: 18};
const copied2 = {...person, ...{hobby: "gaming"}};
console.log(copied2);

// const toArray = (...args) => args;
function toArray(...args){
    return args;
}
console.log(toArray(2,3,4).reduce((total, current) => {return total + current;}));