var spawn = require('child_process').spawn,
    py    = spawn('python', ['script.py']),
    data = [1,2,3,4,5,6,7,8,9],
    dataString = '';

py.stdout.on('data', function(data){
  console.log(data.toString());
  dataString += data.toString();
});

py.stdout.on('end', function(){
  console.log('Sum of numbers=',dataString);
});
py.stdin.write("start");
py.stdin.write("start");
py.stdin.end();
