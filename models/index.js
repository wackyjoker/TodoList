var mongoose = require("mongoose");

mongoose.set("debug",true);

mongoose.connect("mongodb://localhost/work-todo");

mongoose.Promise = Promise;


module.exports.Todo = require("./Todo");