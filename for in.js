function forIn(obj){
    for(prop in obj) {
        console.log(prop+": "+obj[prop]);
    }
}

const obj = {
    name: "José",
    age: 20,
    country: "BR"
}

forIn(obj);