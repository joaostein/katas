var Operator = function() {

    money = [[100, '100 '],
             [50, '50 '],
             [10, '10 '],
             [5, '5 '],
             [1, '1 '],
             [0.5, '0.50 '],
             [0.1, '0.10 '],
             [0.05, '0.05 '],
             [0.01, '0.01 ']];

    this.change = function(totalPrice, payment) {

        var result = '';
        var change = payment - totalPrice;

        change = Math.round(change * 100) / 100;

        for (var i = 0, len = money.length; i < len; i++) {
            while(change >= money[i][0]) {
                result += money[i][1];
                change -= money[i][0];

                change = Math.round(change * 100) / 100;
            }
        }

        return result;
    }
}