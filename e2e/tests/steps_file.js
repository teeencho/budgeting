
'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    unique: function () {
      return '_' + Math.random().toString(36).substr(2, 9);
    },
    parseCurrency: function(currency){
      return Number(currency.replace(/[^0-9.-]+/g,""));
    }

  });
}
