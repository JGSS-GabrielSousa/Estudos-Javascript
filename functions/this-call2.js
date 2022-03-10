const myObj = {
    num1: 2,
    num2: 4,
};

function sum(a, b){
    console.log(this.num1 + this.num2 + a + b)
}

sum.call(myObj, 1, 5)