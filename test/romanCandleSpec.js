
describe("Whos Roman", function () {

  var useSmarter = true;

  describe("error and bounds", function () {

    it('is a number', function () {
      expect(convertToRoman(useSmarter, 'boom')).toEqual("BOOM NaN");
    });

    it("0 is 0", function () {
      expect(convertToRoman(useSmarter, 0)).toEqual(0);
    });

    it("3889 is too large", function () {
      expect(convertToRoman(useSmarter, 3889)).toEqual("Number is too large: 3889");
    });

  });

  describe("1 to 9:", function () {
    it("1 to I", function () {
      expect(convertToRoman(useSmarter, 1)).toEqual('I');
    });

    it("2 to II", function () {
      expect(convertToRoman(useSmarter, 2)).toEqual('II');
    });

    it("3 to III", function () {
      expect(convertToRoman(useSmarter, 3)).toEqual('III');
    });

    it("4 to IV", function () {
      expect(convertToRoman(useSmarter, 4)).toEqual('IV');
    });

    it("5 to V", function () {
      expect(convertToRoman(useSmarter, 5)).toEqual('V');
    });

    it("6 to VI", function () {
      expect(convertToRoman(useSmarter, 6)).toEqual('VI');
    });

    it("7 to VII", function () {
      expect(convertToRoman(useSmarter, 7)).toEqual('VII');
    });

    it("8 to VIII", function () {
      expect(convertToRoman(useSmarter, 8)).toEqual('VIII');
    });

    it("9 to IX", function () {
      expect(convertToRoman(useSmarter, 9)).toEqual('IX');
    });

    it("10 to X", function () {
      expect(convertToRoman(useSmarter, 10)).toEqual('X');
    });
  })

  //------------------ 10 to 99 -----------
  describe('10 to 99:', function () {
    it("10 to X", function () {
      expect(convertToRoman(useSmarter, 10)).toEqual('X');
    });

    it("21 to XXI", function () {
      expect(convertToRoman(useSmarter, 21)).toEqual('XXI');
    });

    it("32 to XXXII", function () {
      expect(convertToRoman(useSmarter, 32)).toEqual('XXXII');
    });

    it("43 to XLIII", function () {
      expect(convertToRoman(useSmarter, 43)).toEqual('XLIII');
    });

    it("54 to LIV", function () {
      expect(convertToRoman(useSmarter, 54)).toEqual('LIV');
    });

    it("65 to LXV", function () {
      expect(convertToRoman(useSmarter, 65)).toEqual('LXV');
    });

    it("76 to LXXVI", function () {
      expect(convertToRoman(useSmarter, 76)).toEqual('LXXVI');
    });

    it("87 to LXXXVII", function () {
      expect(convertToRoman(useSmarter, 87)).toEqual('LXXXVII');
    });

    it("98 to XCVIII", function () {
      expect(convertToRoman(useSmarter, 98)).toEqual('XCVIII');
    });

    it("99 to XCIX", function () {
      expect(convertToRoman(useSmarter, 99)).toEqual('XCIX');
    });
  });
  
  //------------------ 10 to 99 -----------
  describe('numbers 100 and above: ', function () {
    it("100 to C", function () {
      expect(convertToRoman(useSmarter, 100)).toEqual('C');
    });

    it("101 to CI", function () {
      expect(convertToRoman(useSmarter, 101)).toEqual('CI');
    });

    it("212 to CCXII", function () {
      expect(convertToRoman(useSmarter, 212)).toEqual('CCXII');
    });

    it("353 to CCCLIII", function () {
      expect(convertToRoman(useSmarter, 353)).toEqual('CCCLIII');
    });

    it("499 to CDXCIX", function () {
      expect(convertToRoman(useSmarter, 499)).toEqual('CDXCIX');
    });

    it("927 to CMXXVII", function () {
      expect(convertToRoman(useSmarter, 927)).toEqual('CMXXVII');
    });

    it("1927 to MCMXXVII", function () {
      expect(convertToRoman(useSmarter, 1927)).toEqual('MCMXXVII');
    });

    it("2549 to MMDXLIX", function () {
      expect(convertToRoman(useSmarter, 2549)).toEqual('MMDXLIX');
    });

    it("2888 to MMDCCCLXXXVIII", function () {
      expect(convertToRoman(useSmarter, 2888)).toEqual('MMDCCCLXXXVIII');
    });

  });


})