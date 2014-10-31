/*!
 * fiter-parallel.js
 * 
 * Copyright (c) 2014
 */

var Q = require('q');


/* -----------------------------------------------------------------------------
 * fiterParallel
 * ---------------------------------------------------------------------------*/

/**
 * Create an array of promise iterators, for each key in an object, that will
 * be executed in parallel and return a promise that will be resolved once
 * each individual promise in the array has been resolved. The resolved promise
 * will pass the filtered object
 *
 * @public
 *
 * @param {object} obj - Object to iterate over.
 * @param {function} iterator - Function that will be passed the iteration
 *   index and will return a promise.
 */
module.exports = function (obj, iterator) {
  var tasks = [];
  var results = [];

  var filter = function (val) {
    return function (result) {
      if (result) { results.push(val); }
    };
  };

  for (var key in obj) {
    var val = obj[key];
    tasks.push(iterator(val, key)
      .then(filter(val)));
  }

  return Q.all(tasks).then(function () {
    return results;
  });
};


