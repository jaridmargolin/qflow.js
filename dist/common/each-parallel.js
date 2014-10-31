/*!
 * eacb-parallel.js
 * 
 * Copyright (c) 2014
 */

var Q = require('q');


/* -----------------------------------------------------------------------------
 * eacbParallel
 * ---------------------------------------------------------------------------*/

/**
 * Create an array of promise iterators, for each key in an object, that will
 * be executed in parallel and return a promise that will be resolved once
 * each individual promise in the array has been resolved.
 *
 * @public
 *
 * @param {object} obj - Object to iterate over.
 * @param {function} iterator - Function that will be passed the iteration
 *   index and will return a promise.
 */
module.exports = function (obj, iterator) {
  var tasks = [];
  for (var key in obj) {
    tasks.push(iterator(obj[key], key));
  }

  return Q.all(tasks);
};


