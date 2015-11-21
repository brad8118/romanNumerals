var convertToRoman = function (useSmarter, num) {

	var error = errorChecking(num);
	if (error.length > 0 || error === 0) {
		return error;
	}
	
	//use the smarter
	if (useSmarter) {
		return smarterRomanConverter(num);
	}

	var mrRoman = '';

	if (num > 9) {
		mrRoman = tenToNintyNine(num);
		num = Number(('' + num).slice(1)); //convert to string then back to number
	}

	mrRoman += oneToNine(num);

	return mrRoman;
}

var errorChecking = function (num) {

	if (num == 0) {
		return 0;
	}

	if (num > 3888) {
		return "Number is too large: " + num;
	}

	if (num == 0) {
		return 0;
	}

	if (num % 1 !== 0) {
		return "BOOM NaN"
	}

	return "";
}


var oneToNine = function (digit) {
	var roman = 'Not between 1 and 9';

	switch (digit) {
		case '':
		case 0:
			roman = '';
			break;
		case 1:
			roman = 'I';
			break;
		case 2:
			roman = 'II';
			break;
		case 3:
			roman = 'III';
			break;
		case 4:
			roman = 'IV';
			break;
		case 5:
			roman = 'V';
			break;
		case 6:
			roman = 'VI';
			break;
		case 7:
			roman = 'VII';
			break;
		case 8:
			roman = 'VIII';
			break;
		case 9:
			roman = 'IX';
			break;
		// case 10:
		// 	roman = 'X';
		// 	break;
	}

	return roman;
}

var tenToNintyNine = function (num) {
	var roman = 'Not between 10 and 99';

	switch (true) {
		case num >= 90:
			roman = 'XC';
			break;
		case num >= 80:
			roman = 'LXXX';
			break;
		case num >= 70:
			roman = 'LXX';
			break;
		case num >= 60:
			roman = 'LX';
			break;
		case num >= 50:
			roman = 'L';
			break;
		case num >= 40:
			roman = 'XL';
			break;
		case num >= 30:
			roman = 'XXX';
			break;
		case num >= 20:
			roman = 'XX';
			break;
		case num >= 10:
			roman = 'X';
			break;
	}

	return roman;
}