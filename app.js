var express = require('express');
var app = express();

var counter = 0;

app.set('views', './views');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);

app.get('/',function(req,res){
  counter++;
  app.locals.counter = counter.toString();
  res.render('index', {ip: req.ip});
});

app.listen(3000);
app.locals.title = "Hello jade";
app.locals.counter = "0";
