function myMap(arr, callback) {
    let mapArr = [];
    for(let i = 0; i < arr.length; i++){
        mapArr.push(callback(arr[i],i,arr))
    }
    return mapArr;
}
