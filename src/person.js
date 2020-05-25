class Person {
    constructor(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    hello(){
        return(`Hello, my name is ${this.name}, a ${this.age} year old ${this.gender}. My interests include ${this.interests}`)
    }
}

let person = new Person("Anele",19,"female","poetry, yoga, music and hiking")
let greeting = person.hello();
console.log(greeting)

module.exports = Person