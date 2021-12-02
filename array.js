var ages = [110, 34, 23, 2, 32, 4, 34, 134]
console.log(ages)
ages[3] = 36
var p = ages.indexOf(4)
console.log(p)
ages.push(45) //add bottom
ages.pop() //remove bottom
ages.shift()  //remove top
ages.unshift(55) //add top
for (i = 0; i < ages.length; i++) {
    console.log(ages[i])
}
  
