/*!
 * test/each-parallel.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'q',
  'each-parallel'
], function (assert, Q, eachParallel) {


/* -----------------------------------------------------------------------------
 * reusable
 * ---------------------------------------------------------------------------*/

var obj = {
  'key1': 'val1',
  'key2': 'val2'
};


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('each-parallel.js', function () {

  it('Should resolve with results after all iterators have resolved.', function (done) {
    eachParallel(obj, function (val, key) {
      return Q(val);
    }).then(function (results) {
      assert.equal(results[0], 'val1');
      assert.equal(results[1], 'val2');
      done();
    });
  });

  it('Should execute iterators in parallel.', function (done) {
    var start = Date.now();
    var delay = 100;

    eachParallel(obj, function (i) {
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