const util = require("util");

function waitFor(seconds, cb) {
  if (isNaN(seconds) || seconds < 1) {
    return cb(Error("Parameter 'seconds' must be a positive number!"));
  }

  setTimeout(function() {
    cb(null, "\nSuccess!");
  }, seconds * 1000);
}

const waitForAsync = util.promisify(waitFor)


// waitFor(2, function(err, msg) {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(msg);
// })


waitForAsync(2)
  .then(function(msg) {
    console.log(msg); // msg is printed since seconds is more than 0
  })
  .catch(function(err) {
    console.log(err);
  });

waitForAsync(-5)
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(err) {
    console.log(err); // error is printed since 'seconds' is less than 1
  });