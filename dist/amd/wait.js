/*!
 * wait.js
 * 
 * Copyright (c) 2014
 */

define([
  'q'
], function (Q) {


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


});