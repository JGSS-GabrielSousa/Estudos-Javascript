function exponential(array, num = 1){
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(array[i] ** num)
    }

    return result;
}

exponential([1,2,3,4])
exponential([1,2,3,4], 4)