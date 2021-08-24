var assert = require('assert');


describe('sync', function() {
    it('should return [] when the arrays are equal', function() {
      assert.equal(sync([1,2,3],[1,2,3]), []);
    });
});