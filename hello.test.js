const tape = require('tape');
const hello = require('./hello.js');

tape(function (test) {
  test.equal(hello(), 'Hello Travis CI');
  test.equal(hello(), 'Hello World');
  test.equal(hello(), 'Hello JS');
  test.end();
});