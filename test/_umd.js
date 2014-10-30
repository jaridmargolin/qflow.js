/*!
 * test/_umd.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'qflow/qflow'
], function (assert, qflow) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('umd - qflow.js', function () {

  it('Should expose methods.', function () {
    assert.ok(qflow.loopParallel);
  });

});


});