/*!
 * qflow.js
 * 
 * Copyright (c) 2014
 */

var loopParallel = require('./loop-parallel');
var loopSeries = require('./loop-series');
var wait = require('./wait');


/* -----------------------------------------------------------------------------
 * qflow
 * ---------------------------------------------------------------------------*/

module.exports = {
  loopParallel: loopParallel,
  loopSeries: loopSeries,
  wait: wait
};


