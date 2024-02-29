function myevery (arr, callback) {
    debugger
    let result = true;
    for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
        result = false;
        break;
    }
    }
    return result;
}
