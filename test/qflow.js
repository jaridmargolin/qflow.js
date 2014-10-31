/*!
 * test/qflow.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'qflow',
  'loop-parallel',
  'loop-series',
  'each-parallel',
  'wait'
], function (assert, qflow, loopParallel, loopSeries, eachParallel, wait) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('qflow.js', function () {

  it('Should expose methods.', function () {
    assert.equal(qflow.loopParallel, loopParallel);
    assert.equal(qflow.loopSeries, loopSeries);
    assert.equal(qflow.eachParallel, eachParallel);
    assert.equal(qflow.wait, wait);
  });

});


});