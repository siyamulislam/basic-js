var text= "I am a ver hard    working persion.  Its not too much good? are u agree or not!"
var word =0
if(text.length>0) word=1
for(i=0;i<text.length;i++){
    if(text[i]==" " && text[i-1]!=" "){
        word++
    }
}
console.log(word)