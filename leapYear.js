
function isLeapYear(year) {
    let reminder
    //The year is multiple of 400 
    // The year is muiltiple of 4 and not multiple of 100
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return true
    }
    else {
        return false
    }
}
var checkYear = isLeapYear(2000)
console.log(checkYear)