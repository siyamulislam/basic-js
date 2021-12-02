function fact(num){
    var result=1
    for(var i=1; i<=num;i++){
            result=result*i
    }
    return result
}

var result = fact(5)
console.log(result)