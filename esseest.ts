
const {Spanner} = require('@google-cloud/spanner');
const spanner = new Spanner();

const instance = spanner.instance('my-instance');
const database = instance.database('my-database');

database.runTransaction(function(err, transaction) {
  if (err) {
    // Error handling omitted.
  }

  transaction.getCommitStats(function(err, stats) {
    if (err) {
      // Error handling omitted.
    }

    stats.mutationCount; // The number of mutations in the transaction.
    stats.executionCount; // The number of executions in the transaction.
    stats.elapsedTime; // The elapsed time in milliseconds for the transaction.
    stats.computation; // The time in milliseconds spent on computation in the transaction.
  });
});

