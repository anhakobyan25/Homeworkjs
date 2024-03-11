//1
function reverse(number) {
    if (number< 10) {
        return num
    } else {
        let lastNum = number % 10
        let remainNum = Math.floor(number / 10)
        let reversed = reverse(remainNum)
        return +(lastNum.toString() + reversed.toString())
    }
}

//2
function replace(array, number, counter = 0, i = 0){ 
	if (array.length <= 1) {
		return -1
	}
	if(array[0] === number){
    counter++
			if(counter === 2){
        return i
      }  
	}
	 return replace(array.slice(1), number, counter, i + 1)
}

//3
function substring(string, substr, count = 0) {
    string = string.toLowerCase()
	substr = substr.toLowerCase()
	if (string.length < substr.length) {
        return count
    }
    if (string.substr(0, substr.length) === substr) {
        count++
    }
    return substring(string.substring(1), substr, count)
}


//4
function replaceAll(string) {
    if (!string.includes("pi")) {
        return string
    }
    return replaceAll(string.replace("pi", "3.14"))
}
//5
function flat(array) {
    let result = []
    array.forEach((el) =>{
        if (Array.isArray(el)) {
            result = result.concat(flatRec(el))
        } else {
            result.push(el) 
        }
    })
    return result
} 

//6

function numberRec(number) {
    number = number.toString() 
    let sum = 0
    for(let i = 0; i < number.length; i++){
        sum += +number[i]
    }
    if(sum < 10){
        return sum
    }
    return numberRec(sum)
} 