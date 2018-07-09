var express =require("express"),
	route 	= express.Router();

var db = require("../models");

	route.get("/",function(req,res){
		db.Todo.find()
		.then(function(todos){
			res.json(todos);
		})
		.catch(function(err){
			res.send(err);
		})
	});

	route.post("/",function(req,res){
		db.Todo.create(req.body)
		.then(function(newTodo){
			
			res.status(201).json(newTodo);
		})
		.catch(function(err){
			res.send(err);
		})
	});

	route.get("/:todoId",function(req,res){
		db.Todo.findById(req.params.todoId)
		.then(function(foundTodo){
			res.json(foundTodo);
		})
		.catch(function(err){
			res.send(err);
		})
	});


	route.put("/:todoId",function(req,res){
		db.Todo.findOneAndUpdate({_id:req.params.todoId},req.body,{new: true})
		.then(function(foundTodo){
			res.json(foundTodo);
		})
		.catch(function(err){
			res.send(err);
		})
	});


	route.delete("/:todoId",function(req,res){
		db.Todo.remove({_id:req.params.todoId})
		.then(function(foundTodo){
			res.json(foundTodo);
		})
		.catch(function(err){
			res.send(err);
		})
	})

	module.exports = route;