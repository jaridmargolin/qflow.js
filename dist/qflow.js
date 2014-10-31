(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['q'], function (q) {
      return (root.returnExportsGlobal = factory(q));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory(require('q'));
  } else {
    root['qflow'] = factory(root.q);
  }
}(this, function (q) {

/*!
 * loop-parallel.js
 * 
 * Copyright (c) 2014
 */
var loopParallel, loopSeries, eachParallel, wait, qflow;
loopParallel = function (Q) {
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
}(q);
/*!
 * loop-series.js
 * 
 * Copyright (c) 2014
 */
loopSeries = function (Q) {
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
  return function (count, iterator) {
    var results = [];
    var fn = function (i) {
      return iterator(i).then(function (result) {
        results.push(result);
        return i + 1 < count ? fn(i + 1) : results;
      });
    };
    return fn(0);
  };
}(q);
/*!
 * eacb-parallel.js
 * 
 * Copyright (c) 2014
 */
eachParallel = function (Q) {
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
  return function (obj, iterator) {
    var tasks = [];
    for (var key in obj) {
      tasks.push(iterator(obj[key], key));
    }
    return Q.all(tasks);
  };
}(q);
/*!
 * wait.js
 * 
 * Copyright (c) 2014
 */
wait = function (Q) {
  /* -----------------------------------------------------------------------------
   * wait
   * ---------------------------------------------------------------------------*/
  /**
   * Return a promise that resolves after a specified timeout passed
   * in milliseconds.
   *
   * @public
   *
   * @param {integer} time - Milliseconds to wait before resolving
   *   promise.
   */
  return function (time) {
    var deffered = Q.defer();
    setTimeout(deffered.resolve, time);
    return deffered.promise;
  };
}(q);
/*!
 * qflow.js
 * 
 * Copyright (c) 2014
 */
qflow = {
  loopParallel: loopParallel,
  loopSeries: loopSeries,
  eachParallel: eachParallel,
  wait: wait
};

return qflow;


}));