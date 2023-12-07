const person = {name: "Dawid", age: 18, work: "studying"};
// __Tak byśmy to zrobili normalnie:__
// const name = person.name;
// const age = person.age;
// const work = person.work;

// const {name, work} = person;
// console.log(name, work);

const numbers = [1,2,3,4,5];
// __Tak byśmy to zrobili normalnie:__
// const first = numbers[0]
// const second = numbers[1]
// const third = numbers[2]
// const fourth = numbers[3]
// const fifth = numbers[4]

const [first, second, third] = numbers;
console.log(first, second, third);


// __Tak można wybrać elementy POZA JAKIMIŚ Z NICH:__
// const {work, ...rest} = person;
// console.log(work, rest);