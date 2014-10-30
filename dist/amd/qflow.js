/*!
 * qflow.js
 * 
 * Copyright (c) 2014
 */

define([
  './loop-parallel',
  './loop-series',
  './wait'
], function (loopParallel, loopSeries, wait) {


/* -----------------------------------------------------------------------------
 * qflow
 * ---------------------------------------------------------------------------*/

return {
  loopParallel: loopParallel,
  loopSeries: loopSeries,
  wait: wait
};


});