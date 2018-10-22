var fs = require('fs');
var http = require("http");

http.createServer(function(req,res)
{

  function RegEx(string)
  {
    if (typeof(string) != string)
    {
      throw TypeError;
      return 0;
    }
    else
    {
      var regex = str.search(/(at)\b/g);

      return regex;

    }

    fs.readFile('DunwichHorror.txt', function(err,data)
    {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      document.getElementbyID("demo").innerHTML = res.filter(RegEx);
      return res.end();

    });
  }
}).listen(8080);
