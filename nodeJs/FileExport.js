var http = require("http");
var exportDate = require("./DateExport.js");
var url = require("url");

http.createServer(function(req, res) {
  res.writeHead("200",{"content-type":"text/html"});
  res.write(exportDate.currentDate() + " the date" + "   ");
  // res.write(req.url);

  var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt );


}).listen(8080);

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("The date and time are currently: " + dt.myDateTime());
//     res.end();
// }).listen(8080);
