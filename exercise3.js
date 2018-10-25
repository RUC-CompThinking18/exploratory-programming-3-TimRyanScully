var fs = require('fs');

  function RegEx(string)
  {
    if (typeof string != "string")
    {
      throw new Error;
    }
      var regex = string.match(/\w+at\b/g);

      return regex;
  }

  var file = fs.readFileSync('DunwichHorror.txt', 'utf8');

  RegEx(file);
