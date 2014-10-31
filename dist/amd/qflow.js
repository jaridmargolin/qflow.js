/*!
 * qflow.js
 * 
 * Copyright (c) 2014
 */

define([
  './loop-parallel',
  './loop-series',
  './each-parallel',
  './filter-parallel',
  './wait'
], function (loopParallel, loopSeries, eachParallel, filterParallel, wait) {


/* -----------------------------------------------------------------------------
 * qflow
 * ---------------------------------------------------------------------------*/

return {
  loopParallel: loopParallel,
  loopSeries: loopSeries,
  eachParallel: eachParallel,
  filterParallel: filterParallel,
  wait: wait
};


});