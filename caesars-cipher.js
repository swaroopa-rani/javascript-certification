function rot13(str) {
  var cipherval="";
  for(var i=0; i<str.length;i++){
    var asciival=str[i].charCodeAt();
    if(asciival>=65 && asciival<=77){
      cipherval=cipherval+String.fromCharCode(asciival+13);
      }
    else if(asciival>=78 && asciival<=90){
      cipherval=cipherval+String.fromCharCode(asciival-13);
      }
      else{
        cipherval=cipherval+str[i];
      }
  } 
  console.log(cipherval);
}
rot13("SERR PBQR PNZC");

