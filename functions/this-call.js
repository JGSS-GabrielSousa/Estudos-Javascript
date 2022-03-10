const person = {
    name: "Gabriel",
};

const animal = {
    name: "milk",
};

function getSomething(){
    console.log(this.name);
}

getSomething(person); //Nothing
getSomething(animal); //Nothing

getSomething.call(person);
getSomething.call(animal);