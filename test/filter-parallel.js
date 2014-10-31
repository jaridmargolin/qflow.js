/*!
 * test/filter-parallel.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'q',
  'filter-parallel'
], function (assert, Q, filterParallel) {


/* -----------------------------------------------------------------------------
 * reusable
 * ---------------------------------------------------------------------------*/

var obj = {
  'key1': 'val1',
  'key2': false
};


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('filter-parallel.js', function () {

  it('Should resolve with results after all iterators have resolved.', function (done) {
    filterParallel(obj, function (val, key) {
      return Q(val);
    }).then(function (results) {
      assert.equal(results[0], 'val1');
      assert.notOk(results[1]);
      done();
    });
  });

  it('Should execute iterators in parallel.', function (done) {
    var start = Date.now();
    var delay = 100;

    filterParallel(obj, function (i) {
      var deffered = Q.defer();
      setTimeout(deffered.resolve, delay);

      return deffered.promise;
    }).then(function (results) {
      assert.isTrue(Date.now() - start < delay * 2);
      done();
    });
  });

});


});