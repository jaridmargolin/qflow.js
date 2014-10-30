/*!
 * test/loop-series.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'q',
  'loop-series'
], function (assert, Q, loopSeries) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('loop-series.js', function () {

  it('Should resolve with results after all iterators have resolved.', function (done) {
    var count = 2;

    loopSeries(count, function (i) {
      return Q(i);
    }).then(function (results) {
      assert.equal(results.length, count);
      done();
    });
  });

  it('Should execute iterators in a series.', function (done) {
    var start = Date.now();
    var count = 2;
    var delay = 1;

    loopSeries(count, function (i) {
      var deffered = Q.defer();
      setTimeout(deffered.resolve, delay);

      return deffered.promise;
    }).then(function (results) {
      assert.isTrue(Date.now() - start >= delay * count);
      done();
    });
  });

});


});