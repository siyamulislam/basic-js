function fact(num){
    var i=1
    var result=1
    while(i<=num){
        result=result*i
        i++
    }
    return result
}

var result = fact(5)
console.log(result)