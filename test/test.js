var expect = require('chai').expect;
var lib = require('../index');

describe('once saves whether the findTrueLove' + 
  'function has been run', function() {
  it ('once', function(){
    var numberOfTimesItRan = 0;
    var findTrueLove = lib.once(function() {
      numberOfTimesItRan = numberOfTimesItRan + 1;
    });
    findTrueLove();
    findTrueLove();
    expect(numberOfTimesItRan).to.eql(1);
  });
});
