describe('Troco', function() {

    beforeEach(function() {
        operator = new Operator;

    });

    it('should calculate change for notes of value 1', function() {
        expect(operator.change(1, 2)).toBe('1 ');
        expect(operator.change(1, 3)).toBe('1 1 ');
        expect(operator.change(1, 4)).toBe('1 1 1 ');
        expect(operator.change(1, 5)).toBe('1 1 1 1 ');
    });

    it('should calculate change for notes 5', function() {
        expect(operator.change(1, 6)).toBe('5 ');
        expect(operator.change(5, 10)).toBe('5 ');
    });

    it('should combine change for notes 5s and 1s', function() {
        expect(operator.change(1, 7)).toBe('5 1 ');
        expect(operator.change(1, 8)).toBe('5 1 1 ');
        expect(operator.change(1, 9)).toBe('5 1 1 1 ');
        expect(operator.change(1, 10)).toBe('5 1 1 1 1 ');
    });

    it('should calculate change for notes 10', function() {
        expect(operator.change(10, 20)).toBe('10 ');
        expect(operator.change(10, 30)).toBe('10 10 ');
        expect(operator.change(10, 40)).toBe('10 10 10 ');
    });

    it('should calculate change for notes 50', function() {
        expect(operator.change(10, 60)).toBe('50 ');
        expect(operator.change(20, 70)).toBe('50 ');
    });

    it('should calculate change for notes 100', function() {
        expect(operator.change(10, 110)).toBe('100 ');
        expect(operator.change(20, 120)).toBe('100 ');
    });

    it('should combine change for notes 100s, 50s, 10s, 5s and 1s', function() {
        expect(operator.change(1, 13)).toBe('10 1 1 ');
        expect(operator.change(1, 19)).toBe('10 5 1 1 1 ');
        expect(operator.change(1, 23)).toBe('10 10 1 1 ');
        expect(operator.change(1, 27)).toBe('10 10 5 1 ');
        expect(operator.change(1, 34)).toBe('10 10 10 1 1 1 ');
        expect(operator.change(1, 38)).toBe('10 10 10 5 1 1 ');
        expect(operator.change(1, 42)).toBe('10 10 10 10 1 ');
        expect(operator.change(1, 49)).toBe('10 10 10 10 5 1 1 1 ');
        expect(operator.change(1, 53)).toBe('50 1 1 ');
        expect(operator.change(1, 59)).toBe('50 5 1 1 1 ');
        expect(operator.change(1, 69)).toBe('50 10 5 1 1 1 ');
        expect(operator.change(1, 187)).toBe('100 50 10 10 10 5 1 ');
    });

    it('should calculate change for coins of value 0.01', function() {
        expect(operator.change(1, 1.01)).toBe('0.01 ');
        expect(operator.change(1, 1.02)).toBe('0.01 0.01 ');
        expect(operator.change(1, 1.03)).toBe('0.01 0.01 0.01 ');
        expect(operator.change(1, 1.04)).toBe('0.01 0.01 0.01 0.01 ');
    });

    it('should calculate change for coins of value 0.05', function() {
        expect(operator.change(1, 1.05)).toBe('0.05 ');
    });

    it('should calculate change for coins of value 0.10', function() {
        expect(operator.change(1, 1.10)).toBe('0.10 ');
        expect(operator.change(1.10, 1.20)).toBe('0.10 ');
    });

    it('should calculate change for coins of value 0.50', function() {
        expect(operator.change(1, 1.50)).toBe('0.50 ');
    });

    it('should combine change for coins of values 0.50s, 0.10s, 0.05s and 0.01s', function() {
        expect(operator.change(1, 1.07)).toBe('0.05 0.01 0.01 ');
        expect(operator.change(1, 1.18)).toBe('0.10 0.05 0.01 0.01 0.01 ');
        expect(operator.change(1, 1.29)).toBe('0.10 0.10 0.05 0.01 0.01 0.01 0.01 ');
        expect(operator.change(1, 1.33)).toBe('0.10 0.10 0.10 0.01 0.01 0.01 ');
        expect(operator.change(1, 1.57)).toBe('0.50 0.05 0.01 0.01 ');
        expect(operator.change(1, 1.99)).toBe('0.50 0.10 0.10 0.10 0.10 0.05 0.01 0.01 0.01 0.01 ');
    });

    it('should combine change for coins and notes', function() {
        expect(operator.change(1.72, 5.23)).toBe('1 1 1 0.50 0.01 ');
        expect(operator.change(121.29, 150.14)).toBe('10 10 5 1 1 1 0.50 0.10 0.10 0.10 0.05 ');
        expect(operator.change(1212.69, 1720.97)).toBe('100 100 100 100 100 5 1 1 1 0.10 0.10 0.05 0.01 0.01 0.01 ');
    });







});