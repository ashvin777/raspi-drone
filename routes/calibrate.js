var express = require('express');
var router = express.Router();
var spawn = require('child_process').spawn;

/* GET users listing. */
router.get('/', function(req, res, next) {
  var py = spawn('python', ['calibrate.py']);
  py.stdout.on('end', function(){
    res.status(200).send("Calibration Successfull");
  });
  py.stdin.write("calibrate");
  py.stdin.end();
});

module.exports = router;
