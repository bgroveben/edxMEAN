var _ = require('underscore');
// Simple sample function that prints numbers to the console.
_.each([1, 2, 3], function(v) {
  console.log(v);
});

// The following code connects mongodb with node.js and does stuff
var mongodb = require('mongodb');
var uri = 'mongodb://localhost:27017/example';
// Connect to the database
mongodb.MongoClient.connect(uri, function(error, db) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  // Insert a document ({ x: 1}) into the 'sample' collection
  db.collection('sample').insert({ x: 1}, function(error, result) {
    if (error) {
      console.log(error);
      process.exit(1);
    }
    // Query the database
    // db.collection('sample').find(), (function(error, docs) { // This line returns a cursor in the console
    // What we want is a list of the results from the query, so we'll use the following line instead:
    db.collection('sample').find().toArray(function(error, docs) {
      if (error) {
        console.log(error);
        process.exit(1);
      }
      // Print the query results to the console
      console.log('Found docs:');
      docs.forEach(function(doc) {
        console.log(JSON.stringify(doc));
      });
      process.exit(0);
    });
  });
});
