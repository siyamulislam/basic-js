
function inchTofeet(value){
    var foot=value/12
    var rInch=value%12
    return console.log(value+ " inch= "+Math.floor(foot)+" foot " +rInch+" Inch")
}


inchTofeet(165)
inchTofeet(345)