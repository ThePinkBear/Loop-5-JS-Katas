const assert = require('assert');
const should = require('chai').should();

const fizzBuzz = require('./fizzBuzz.js');

describe.skip('isNumberValid', () => {
  
  it('throws an error when passed in a string as argument', () => { 
    assert.throws(() => fizzBuzz.isNumberValid('text'), new Error('Only numbers are allowed')); 
  });

  it('does not throw an error when passed in a number as argument', () => { 
    assert.doesNotThrow(() => fizzBuzz.isNumberValid(12), Error); 
  });

  

});

describe.skip('fizz', () => {

  it('checks if number is divisible by 3', () => {
    fizzBuzz.fizz(6).should.equals(true);
  });

});

describe.skip('buzz', () => {

  it('checks if number is divisible by 5', () => {
    fizzBuzz.buzz(10).should.equals(true);
  });

});

describe.skip('fizzBuzz', () => {

  it('checks if divisible by 3 and 5', () => {
    fizzBuzz.fizzBuzz(15).should.equals(true);
  }); 
});

describe.skip ('arrayer', () => {

  it('makes a sequence number array from passed in number2', () => {
    fizzBuzz.arrayer(5).length.should.equals(5);
  });
  it('makes a sequence number array from passed in number1', () => {
    fizzBuzz.arrayer(5)[4].should.equals(5);
  });
  it('makes a sequence number array from passed in number', () => {
    fizzBuzz.arrayer(100)[99].should.equals(100);
  });
});

///----------------------------------------------------------------------///

//Roman Numerals Tests

describe ('fizzBuzzer', () => {

  it('creates finished array', () => {
    fizzBuzz.fizzBuzzer(100).should.contain('fizzBuzz');
  });
});

