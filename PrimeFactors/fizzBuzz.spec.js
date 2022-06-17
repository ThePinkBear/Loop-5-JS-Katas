const assert = require('assert');
const should = require('chai').should();

const fizzBuzz = require('./fizzBuzz.js');

describe('display', () => {
  
  it('does not throw an error when passed in a number as argument', () => { 
    assert.doesNotThrow(() => fizzBuzz.display(467), Error); 
  });
});

describe('factorize', () => {
  
  it('does not throw an error when passed in a number as argument', () => { 
    assert.doesNotThrow(() => fizzBuzz.factorize(6987), Error); 
  });
});


