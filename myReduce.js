function myReduce(array, callback, value){
	let acc = value !== undefined ? value : array[0]
 	const index = value !== undefined ? 0 : 1
   	for(let i = index; i< array.length; i++){
	   	acc  = (callback(acc ,array[i],i, array))
    }
	return acc 
}
