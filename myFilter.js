function myFilter(arr, callback) {
    let filterArr = [];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i],i,arr)){
            filterArr.push(arr[i])
        }
    }
    return filterArr;
}
