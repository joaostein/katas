var Roman = function() {
    
    digits = [[100, 'C'],
              [90, 'XC'],
              [50, 'L'],
              [10, 'X'],
              [9, 'IX'],
              [5, 'V'],
              [4, 'IV'],
              [1, 'I']];

    this.convert = function(number) {

        output = '';

        for (var i = 0, len = digits.length; i < len; i++) {
            while(number >= digits[i][0]) {
                output += digits[i][1];
                number -= digits[i][0];
            }
        }

        return output;
    }
}