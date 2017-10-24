var http = require("http");
var fileSystem = require("fs");

var exportDate = require("./DateExport.js");
var url = require("url");

http.createServer(function(req, res) {

  /* File Creation */
  fileSystem.writeFile("../ExternalData/SampleTextForNodeJS.txt","On creating new text with write mode.",function(err, data) {
  if(err) throw err;
  // console.log("file write");
});

  /* File open */
  fileSystem.open("../ExternalData/SampleTextForNodeJS.txt","w",function(err, data) {
  if(err) throw err;
  // console.log("file open");
});

  /* File update */
  fileSystem.appendFile("../ExternalData/SampleTextForNodeJS.txt","And i just append some text to previous one.",function(err, data) {
  if(err) throw err;
  // console.log("file update");
});

/*Rename the file */
fileSystem.rename('../ExternalData/SampleTextForNodeJS.txt', '../ExternalData/RenamedSampleTextForNodeJS.txt', function (err) {
  if (err) throw err;
  // console.log('File Renamed!');
});

  fileSystem.readFile("../ExternalData/RenamedSampleTextForNodeJS.txt", function(err, data) {

    res.writeHead("200",{"content-type":"text/html"});
    res.write(data);
    res.end();
  });

fileSystem.unlink("../ExternalData/RenamedSampleTextForNodeJS.txt",function(err) {
  if(err) thorw err;
  //  console.log("delete the file");
});


}).listen(8080);

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("The date and time are currently: " + dt.myDateTime());
//     res.end();
// }).listen(8080);
