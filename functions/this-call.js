const person = {
    name: "Gabriel",
};

const animal = {
    name: "Milk",
};

function getSomething(){
    console.log(this.name);
}

getSomething(person); //Nothing
getSomething(animal); //Nothing

getSomething.call(person);
getSomething.call(animal);