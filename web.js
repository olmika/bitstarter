var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.use('/',express.static(__dirname));

app.get('/', function(request, response){ 
  var index_buffer = fs.readFileSync('index.html');
  var index_content = index_buffer.toString();
  response.send(index_content);
});


var port = process.env.PORT ||8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
