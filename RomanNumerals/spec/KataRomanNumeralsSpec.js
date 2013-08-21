describe("Romans", function() {
    
    beforeEach(function() {
        roman = new Roman;
    });

    it("should convert the Is", function() {
        expect(roman.convert(1)).toBe('I');
        expect(roman.convert(2)).toBe('II');
        expect(roman.convert(3)).toBe('III');
    });


    it("Should convert the IV", function() {
        expect(roman.convert(4)).toBe('IV');
    });

    it("Should convert the V", function() {
        expect(roman.convert(5)).toBe('V');
    });

    it("should sums V with the Is", function() {
        expect(roman.convert(6)).toBe('VI');
        expect(roman.convert(7)).toBe('VII');
        expect(roman.convert(8)).toBe('VIII');
    });

    it("Should convert the IX", function() {
        expect(roman.convert(9)).toBe('IX');
    });

    it("Should convert the Xs", function() {
        expect(roman.convert(10)).toBe('X');
        expect(roman.convert(20)).toBe('XX');
        expect(roman.convert(30)).toBe('XXX');
    });

    it("should sums X with the Is", function() {
        expect(roman.convert(11)).toBe('XI');
        expect(roman.convert(12)).toBe('XII');
        expect(roman.convert(13)).toBe('XIII');
        expect(roman.convert(21)).toBe('XXI');
        expect(roman.convert(22)).toBe('XXII');
        expect(roman.convert(23)).toBe('XXIII');
    });

    it("should convert XIV", function() {
        expect(roman.convert(14)).toBe('XIV');
    });

    it("should convert XV", function() {
        expect(roman.convert(15)).toBe('XV');
    });

    it("should sums XV with the Is", function() {
        expect(roman.convert(16)).toBe('XVI');
        expect(roman.convert(17)).toBe('XVII');
        expect(roman.convert(18)).toBe('XVIII');
    });

    it("should convert XIX", function() {
        expect(roman.convert(19)).toBe('XIX');
    });

    it("should convert the Ls", function() {
        expect(roman.convert(50)).toBe('L');
        expect(roman.convert(60)).toBe('LX');
        expect(roman.convert(70)).toBe('LXX');
        expect(roman.convert(80)).toBe('LXXX');
    });

    it("should convert XCs", function() {
        expect(roman.convert(90)).toBe('XC');
        expect(roman.convert(91)).toBe('XCI');
        expect(roman.convert(92)).toBe('XCII');
        expect(roman.convert(93)).toBe('XCIII');
        expect(roman.convert(94)).toBe('XCIV');
        expect(roman.convert(95)).toBe('XCV');
        expect(roman.convert(96)).toBe('XCVI');

    });

    it("should compose L, X, V and Is", function() {
        expect(roman.convert(77)).toBe('LXXVII');
        expect(roman.convert(83)).toBe('LXXXIII');
    });

    it("should convert the Cs", function() {
        expect(roman.convert(100)).toBe('C');
        expect(roman.convert(101)).toBe('CI');
        expect(roman.convert(104)).toBe('CIV');
        expect(roman.convert(105)).toBe('CV');
        expect(roman.convert(200)).toBe('CC');
        expect(roman.convert(300)).toBe('CCC');
    });



});