function arraySum(getMarks) {
    var sum = 0
    for (i = 0; i < getMarks.length; i++) {
        sum = sum + getMarks[i]
    }
    return sum
}

var marks = [4, 93, 34, 3, 45, 23, 4, 67, 23, 43, 4, 98, 67]
var sum = arraySum(marks)
console.log(sum)