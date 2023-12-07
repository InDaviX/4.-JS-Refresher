const name = "Dawid";
let age = 18;
let knowJS = true;
let nameAgeCombination = name+age;
console.log(name, age, knowJS);

function whoIsUser(imie, wiek) {
    return "name is " + imie + " and age is " + wiek;
}

console.log(whoIsUser(name, age));
console.log(nameAgeCombination);