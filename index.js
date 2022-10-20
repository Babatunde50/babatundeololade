#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
  title: pkgJSON.name,
  tagLine: `Get to know Babatunde`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#0077ff`,
  color: `#000000`,
  bold: true,
  clear: true,
});

console.log(`Babatunde Ololade`);
