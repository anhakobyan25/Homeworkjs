function myFinde(arr, callback) {
    let result = undefined;
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i],i,arr)){
            result = arr[i];
            break;
        }
    }
    return result;
}
