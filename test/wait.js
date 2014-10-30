/*!
 * test/wait.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'wait'
], function (assert, wait) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('wait.js', function () {

  it('Should wait specified amount before resolving.', function (done) {
    var start = Date.now();
    var delay = 10;

    wait(delay).then(function () {
      assert.isTrue(Date.now() - start >= delay);
      done();
    });
  });

});


});