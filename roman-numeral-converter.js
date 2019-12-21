function convertToRoman(num) {
	var romanVal={
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};

	var numToRoman="";
	for(var key in romanVal){
		while(num>=romanVal[key]){
			numToRoman=numToRoman+key;
			num=num-romanVal[key];
		}
	}
	console.log(numToRoman);
}
convertToRoman(3999);
