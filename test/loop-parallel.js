/*!
 * test/loop-parallel.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'q',
  'loop-parallel'
], function (assert, Q, loopParallel) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('loop-parallel.js', function () {

  it('Should resolve with results after all iterators have resolved.', function (done) {
    var count = 2;

    loopParallel(count, function (i) {
      return Q(i);
    }).then(function (results) {
      assert.equal(results.length, count);
      done();
    });
  });

  it('Should execute iterators in parallel.', function (done) {
    var start = Date.now();
    var count = 2;
    var delay = 1;

    loopParallel(count, function (i) {
      var deffered = Q.defer();
      setTimeout(deffered.resolve, delay);

      return deffered.promise;
    }).then(function (results) {
      assert.isTrue(Date.now() - start < delay * count);
      done();
    });
  });

});


});