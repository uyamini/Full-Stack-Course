console.log = function() {};

const fs = require('fs');
const code = fs.readFileSync('breadcrumb.css', 'utf8');
const assert = require('chai').assert;


  // step 1: CSS regex 
let CSS_RegEx1 = /\.breadcrumb\s*>?\s*li.location\+li.location:*before\s*{[^}]*content\s*:\s*">"\s*\s*[^}]*}/ // put your css selectors here

let found1 = CSS_RegEx1.test(code);

describe('', function () {
  it('', function () {
    assert.strictEqual(found1, true, 'Make sure to add the location class to both li selectors within the `.breadcrumb li+li::before` selector')
  })
})