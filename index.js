var express = require("express"),
	app 	= express(),
	bodyParser= require("body-parser");

var todoRoutes= require("./routes/todo");

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:true}));
	app.use("/public", express.static(__dirname + "/public"));
	app.use(express.static(__dirname + '/views'));

	app.get("/",function(req,res){
		res.sendFile('index.html');
	});

	app.use("/api/todo",todoRoutes);

	app.listen(3000,function(err){
		if(err){
			console.log(err);
		} else {
			console.log("server started at port 3000");
		}
	});