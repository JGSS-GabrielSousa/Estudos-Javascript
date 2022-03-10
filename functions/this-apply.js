const person = {
    name: "Gabriel",
};

const animal = {
    name: "Milk",
};

function getSomething(){
    console.log(this.name);
}

getSomething.apply(person);
getSomething.apply(animal);