var a =5
var b= 7
console.log("before swap a="+a, "b="+b)

//with temp veriable
// var temp =a
// a=b
// b=temp 
// console.log("after swap a="+a, "b="+b)

//withOutTemp
a=a+b
b=a-b
a=a-b
console.log("after swap a="+a, "b="+b )

//with JS special
var p = 5
var q = 7
var [p, q]=[q, p]
console.log("after swap p=", p, "q=", q );