function telephoneCheck(str) {  
  var regEx = /^(1?\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/g;
  var flag = regEx.test(str); 
  console.log(flag);
}
telephoneCheck(9877878743)
