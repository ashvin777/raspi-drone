var express = require('express');
var router = express.Router();
var spawn = require('child_process').spawn;
var script = "cleanup.py";

router.get('/', function(req, res, next) {
  stopDrone(res);
});

function stopDrone(res){
  var py = spawn('python', [script]);
  var response = "";
  py.stdout.on('data', function(data){
    response += data.toString();
  });
  py.stdout.on('end', function(){
    res.status(200).send(response);
  });
  py.stdin.write('test');
  py.stdin.end();
}

module.exports = router;
