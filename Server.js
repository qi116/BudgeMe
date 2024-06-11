const express = require('express');
const bodyParser = require("body-parser")

const router = express.Router();

app = express();
app.use('/', express.static(__dirname + '/'));
app.use('/', router);

router.use(bodyParser.urlencoded({
    extended:false
}));

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

// app.post("/login", function(req, res) {
//   	let user = req.body.user;
//     let pass = req.body.pass;
   	
//   	res.end("yes");
router.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

router.post("/login", function(req, res) {
	
  	let user = req.body.user;
    let pass = req.body.password;
   	if(user == "admin" && pass == "password"){
      res.send("yes");
    }
    else{
      res.send("no");
    }
  	
  	//res.send(user + pass);
}); 

const port = 8000;
app.listen(port, function() {
	console.log("Listening on port " + port);
})

// var http = require('http');
// http.createServer(function(req,res){
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.end('Hello World!');
// }).listen(8080);

