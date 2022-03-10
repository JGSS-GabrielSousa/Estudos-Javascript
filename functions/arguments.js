function findMax() {
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}

findMax(1, 4, -10, 50, 50, 90, 10, 20);