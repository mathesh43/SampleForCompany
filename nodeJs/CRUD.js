var express = require('express')
var bodyParser = require('body-parser')
var fileSystem = require('fs')

var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/new_user',function (req, res) {
  saveUserInformation(req,res);
})
app.get('/get_user',function (req, res) {
  getAllUsersInformation(res);
  console.log("inside get")
})

function getAllUsersInformation(response) {
  console.log("inside getAllUsersInformation")
  fileSystem.readFile("../ExternalData/UserData.txt",function(err, data) {
  if(err) {
  response.writeHead("404", {"Content-Type":"text/html"});
  response.end("error occured. cannot get Information")
  }
  response.setHeader('Content-Type', 'text/plain')
  response.write('you posted:\n')
  response.end(data)
    console.log(" data retrieved ");
    return;
  });
}

function saveUserInformation(requestData, response) {

  var dataToStore = JSON.stringify(requestData.body, null, 2) + "\n";
  fileSystem.appendFile("../ExternalData/UserData.txt",dataToStore,function(err, data) {
  if(err) {
  response.writeHead("404", {"Content-Type":"text/html"});
  response.end("error")
  }
  response.setHeader('Content-Type', 'text/plain')
  response.write('you posted:\n')
  response.write(JSON.stringify(requestData.body, null, 2))
    response.end("  Stored success fully")
    console.log(" data saved ");
    return;

});
}
app.listen(8080);
