var express = require('express');
var router = express.Router();
var spawn = require('child_process').spawn;
var py = spawn('python', ['script.py']);
var data = [1,2,3,4,5,6,7,8,9];
var dataString = '';

/* GET users listing. */
router.get('/', function(req, res, next) {
  // py.stdin.write("start");
  // py.stdin.end();
  py.stdout.on('data', function(data){
    console.log(data.toString());
    dataString += data.toString();
  });

  py.stdout.on('end', function(){
    console.log('Sum of numbers=',dataString);
    // res.send("testing", dataString);
    res.status(200).send("sefsdfdsf"+ dataString);
  });
  py.stdin.write("start");
  py.stdin.write("start");
  py.stdin.end();

});



module.exports = router;
