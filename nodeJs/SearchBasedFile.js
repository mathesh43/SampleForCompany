var url = require("url");
var http = require("http");
var fileSystem = require("fs");

http.createServer(function(req, res) {
  var q = url.parse(req.url, true);
  var filename ="../ExternalData"+  q.pathname;
  fileSystem.readFile(filename,function(err,data) {
    if(err) {
      res.writeHead("404",{"content-type":"text/html"});
      res.write("file not found");
      return res.end();
    }

    res.writeHead("200",{"content-type":"text/html"});
    res.write(data);
    return res.end();
  })

}).listen(8080);
