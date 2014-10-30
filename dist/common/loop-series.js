/*!
 * loop-series.js
 * 
 * Copyright (c) 2014
 */

var Q = require('q');


/* -----------------------------------------------------------------------------
 * loopSeries
 * ---------------------------------------------------------------------------*/

/**
 * Create an array of promise iterators that will be executed in a series
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
  var results = [];

  var fn = function (i) {
    return iterator(i).then(function (result) {
      results.push(result);
      return i + 1 < count
        ? fn(i + 1)
        : results;
    });
  };

  return fn(0);
};


