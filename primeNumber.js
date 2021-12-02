function isPrime(n){
    var prime=false
    if(n==1 && n==2) prime= true
    for(i=2;i<n;i++){ 
        console.log(i,n%i)
        if(n%i==0){
            prime = true   
        }
    } 
return prime
}
var result = isPrime(2) 
if(result==false) console.log(' Prime')

else console.log('Not Prime')