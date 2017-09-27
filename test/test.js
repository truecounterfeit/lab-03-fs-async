'use strict';

const fp = require('../lib/print-files.js');

const expect = require('expect');

//correct
describe( 'print-files', function(){
  describe('print files 1, 2, 3', function() {
    it('should return an array that states [go, washington, state]', function(){
      let result = fp.labFunction(['go', 'washington', 'state']);
      expect(result).toBe(['go', 'washington', 'state']);
    });
  });
});

//fail
describe( 'print-files', function(){
  describe('print files 1, 2, 3', function() {
    it('should return undefined', function(){
      let result = fp.labFunction([4, 'washington', true]);
      expect(result).toBe(undefined);
    });
  });
});
