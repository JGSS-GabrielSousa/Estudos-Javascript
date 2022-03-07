const calc = function(op, num1, num2){
    return op(num1, num2);
}

const sum = function(num1, num2){
    return num1 + num2;
}

const sub = function(num1, num2){
    return num1 - num2;
}

const resultSum = calc(sum, 2, 2);
const resultSub = calc(sub, 2, 2);

console.log(resultSum);
console.log(resultSub);