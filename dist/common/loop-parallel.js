/*!
 * loop-parallel.js
 * 
 * Copyright (c) 2014
 */

var Q = require('q');


/* -----------------------------------------------------------------------------
 * loopParallel
 * ---------------------------------------------------------------------------*/

/**
 * Create an array of promise iterators that will be executed in parallel
 * and return a promise that will be resolved once each individual
 * promise in the array has been resolved.
 *
 * @public
 *
 * @param {int} count - Number of times to call iterator.
 * @param {function} iterator - Function that will be passed the iteration
 *   index and will return a promise.
 */
module.exports = function (count, iterator) {
  var tasks = [];
  for (var i = 0; i < count; i++) {
    tasks.push(iterator(i));
  }

  return Q.all(tasks);
};


