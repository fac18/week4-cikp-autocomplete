const test = require('tape');

// Test that tape is working OK
const sum = (a, b) => {
    return a + b;
  }
  
  test('sum should return the addition of two numbers', function (t) {
    let actual = sum(1, 2);
    let expected = 3;
    t.equal(actual, expected); 
    t.end();
  });