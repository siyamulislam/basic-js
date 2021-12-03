var marks=[4,93,34,3,45,23,4,67,23,43,4,98,67]
var max =marks[0]
for(i=0;i<marks.length;i++){
    if(max<marks[i])
        max=marks[i]
}
console.log(max)