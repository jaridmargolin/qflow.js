/*!
 * loop-parallel.js
 * 
 * Copyright (c) 2014
 */

define([
  'q'
], function (Q) {


/* -----------------------------------------------------------------------------
 * loopParallel
 * ---------------------------------------------------------------------------*/

/**
 * Create an array of promise iterators, for x interations, that will
 * be executed in parallel and return a promise that will be resolved once
 * each individual promise in the array has been resolved.
 *
 * @public
 *
 * @param {int} count - Number of times to call iterator.
 * @param {function} iterator - Function that will be passed the iteration
 *   index and will return a promise.
 */
return function (count, iterator) {
  var tasks = [];
  for (var i = 0; i < count; i++) {
    tasks.push(iterator(i));
  }

  return Q.all(tasks);
};


});