var fn = require('./myfile.js');
fn();

// When you require a directory, Node looks for an index.js file in that directory.
var otherFn = require('./test').other;
otherFn();
