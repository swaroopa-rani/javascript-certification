function palindrome(str) {
  str = str.replace(/[\W_]/g, '');
  var str1= str.toLowerCase();
  var str2=str1.split("").reverse().join("");
 
  if(str1==str2){
  	console.log(true);
  }
  else{
  	console.log(false);
  }
}


palindrome("_eye");