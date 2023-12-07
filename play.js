const person = {
    name: 'John',
    age: 34,
    greet: function (){
        console.log("Hi, I'm " + this.name + "!");
    }
}
console.log(person.greet());