const person = {
    name: "Alice",
    age: 30,
    greet: function() {
        return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
    }
};

console.log(person.greet()); // Outputs: Hello, my name is Alice and I am 30 years old.