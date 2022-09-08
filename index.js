// Your code here
class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says meow!`;
    }
}

const cat = new Cat("rose", "female");
cat;

class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return  `${this.name} says woof!`;
    }
}

const dog = new Dog("harry", "male");
dog;

class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak(){
        if(this.sex === "male") {
            return `It's me! ${this.name}, the parrot!`;
        }else {
            return `${this.name} says squawk!`;
        }
    }
}

const bird = new Bird("koo", "male");
bird;