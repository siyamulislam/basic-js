var id =[2,1,2,2,1,4,8,4,2,1,99,23,3,23,23,24,23,32]
var uID =[]
for(i=0;i<id.length;i++){
    if( uID.indexOf(id[i])==-1){
        uID.push(id[i]);
    }
}
console.log(id)
console.log(uID)
