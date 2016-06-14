var express = require("express");
var exec = require("child_process").exec;
var config = require(__dirname + "/config.json")

var main = function(){
	this.main();
}

main.prototype.init = function(){
	this.express = express();
	this.express.listen(config.port, function(){
		console.log("--> Listening on port " + config.port);
	});
}

main.prototype.main = function(){
	if(!this.hasInit){
		this.init();
	}

	this.express.get("/shutdown", function(req, res){
		res.end("Done!");
		exec('SHUTDOWN -s -c "Shutting down computer." -t 60', function(error, stdout, stderr){ callback(stdout); });
	});
}

new main();