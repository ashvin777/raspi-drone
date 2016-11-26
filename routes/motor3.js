var express = require('express');
var router = express.Router();
var spawn = require('child_process').spawn;
var script = "motor3.py";
var speed = 5.2;
var interval = null;

router.get('/plus', function(req, res, next) {
  clearInterval(interval);
  interval = setInterval(function(){
    callMotor(speed);
  }, 1000);
  speed = parseFloat((speed + 0.1).toFixed(1));
  callMotor(speed, res)
});

router.get('/minus', function(req, res, next) {
  clearInterval(interval);
  interval = setInterval(function(){
    callMotor(speed);
  }, 1000);
  speed = parseFloat((speed - 0.1).toFixed(1));
  callMotor(speed, res)
});

function callMotor(speed, res){
  var py = spawn('python', [script]);
  var response = "";
  if(speed >= 10){
    speed = 10;
  } else if(speed <= 5){
    speed = 5;
  }
  py.stdout.on('data', function(data){
    response += data.toString();
  });
  py.stdout.on('end', function(){
    if(res){
        res.status(200).send(response);
    }
  });
  py.stdin.write(JSON.stringify(speed));
  py.stdin.end();
}

module.exports = router;
