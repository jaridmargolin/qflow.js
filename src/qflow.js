/*!
 * qflow.js
 * 
 * Copyright (c) 2014
 */

define([
  './loop-parallel',
  './loop-series',
  './each-parallel',
  './wait'
], function (loopParallel, loopSeries, eachParallel, wait) {


/* -----------------------------------------------------------------------------
 * qflow
 * ---------------------------------------------------------------------------*/

return {
  loopParallel: loopParallel,
  loopSeries: loopSeries,
  eachParallel: eachParallel,
  wait: wait
};


});