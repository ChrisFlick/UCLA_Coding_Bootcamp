function filter(arr, func) {
    let rval = []
    // for (let i = 0; i < arr.length; i++) {
    //     if (func(arr[i])) {
    //         rval.push(arr[i])
    //     }
    // }
    
    arr.forEach(element => {
        if(func(element)) {
            rval.push(element);
        }
    });
    return rval;
}

let array = filter([1,2,3,4], function(element) {
    return element % 2
});

console.log(array);