var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');

module.exports = {
	dashboard: function(req, res){
		res.render('dashboard');		
	},
	get_topics : function(req,res){
		Topic.find({},function(err,results){
			if(err) {
				console.log('error');
			} else {
				res.json(results);
			}		
		})
	},
	get_one_topic : function(req,res){
		Topic.find({_id : req.params.id}, function(err, results){
			if(err){
				console.log('err');
			} else {
				res.json(results);
			}			
		})
	},
	add_post: function(req, res){
		var query = { _id :  req.body.id };
		var data = {};
		data.post = req.body.post;
		data.name = req.body.name;
		Topic.update(query,{$addToSet : { posts : data }},function(err, status){
			if(err){
				console.log('error');
			} else {
				console.log(status);
				//res.sendStatus(status);
			}
		})
	},

	like_post: function(req,res){
		var query = { "posts._id" : req.params.id };
		console.log(query);
		// Topic.update(query, { $inc : { "posts.likes" : 1 }}, function(err, status){
		// 	if(err){
		// 		console.log('error');
		// 	} else {
		// 		console.log(status);
		// 		//res.sendStatus(status);
		// 	}
		// });
		Topic.update(query,{$inc : {"posts.$.likes" : 1}}).exec();
		res.end();
	},

	add_topic: function(req, res){
		var a = new Topic(req.body);
		a.save(function(err, result){
			if(err){
				console.log('error');
			} else {
				console.log('successfully added a topic');
				res.redirect('/get_topics');
			}
		});
	}


}