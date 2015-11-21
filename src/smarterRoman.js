
//var lookup = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

//1000-M, 900-DM, 500-D, 400-CD, 100-C, 90-XC, 50-L, 40-XL, 10-X, 9-IX, 5-V, 4-IV, 1-I
var numberLookup = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var symbolLookup = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

var smarterRomanConverter = function (num) {
	var roman = '', i = 0;

//debugger;
	while (i < numberLookup.length) {
		while (num >= numberLookup[i]) {
			roman += symbolLookup[i];
			num -= numberLookup[i];
		}
		i++;
	}
	return roman;
}
