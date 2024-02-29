function myJoin(arr, separator) {
    debugger
    if (typeof(separator)!== 'string') {
	    separator = ',';
    }
    let result = "";
    for(let i = 0; i < arr.length; i++){
        if (i > 0) {
            result += separator;
        }
        if (arr[i] !== undefined) {
            result += arr[i];
        }
    }

  return result;
}
