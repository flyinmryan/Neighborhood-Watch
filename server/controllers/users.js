var mongoose = require('mongoose');
var User = mongoose.model('User');
var Issue = mongoose.model('Issue');

module.exports = {
	show_index: function(req, res){
		res.render('login');		
	},
	login : function(req,res){
		User.find({},function(err,results){
			if(err) {
				console.log('error');
			} else {
				for(var i=0;i<results.length;i++){
					if(results[i].mail == req.body.mail ){
						console.log("found user");
						res.json(results[i]);
					}else{
						console.log("user not found");
					}
				}
				//res.json(results);
			}		
		})
	},

	addComment : function(req,res){
		//console.log(req.body);
		var query = {_id : req.body.issueid};
		var data ={};
		data.comment = req.body.comment;
		data.mail = req.body.user;
		Issue.update(query,{$addToSet : {comments : data}},function(err,status){
			if(err){
				console.log("error updating comment");
			}else{
				console.log("updated comment successfully");
				//res.redirect('/getIssues');
			}
		})
	},

	register: function(req, res){
		//console.log(req.body);
		User.find({},function(err,results){
			if(err) {
				console.log('error');
			} else {
				var unique = true;
				for(var i=0;i<results.length;i++){
					if(results[i].mail == req.body.mail){
						unique = false;
						break
					}
				}
				if(unique){
					var new_user = new User(req.body);
					new_user.save(function(err, result){
						if(err){
							console.log('error');
						} else {
							console.log('successfully added a user');
							//console.log(result);
							res.json(result);
						}
					})
				}
			}
		});
	},

	getIssues : function(req,res){
		Issue.find({}).populate('_user').exec(function(err,data){
			if(err){
				console.log("error finding issues");
			}else{
				//console.log("found issues",data);
				res.json(data);
			}
		})
	},

	get_issue : function(req,res){
		console.log(req.params.id);
		Issue.find({_id : req.params.id}).populate('_user').exec (function(err,result){
			if(err){
				console.log("error finding issue");
			}else{
				res.json(result);
			}
		})
	},

	addIssue : function(req,res){
		//console.log(req.body);
		User.findOne({_id:req.body.id},function(err,singleUser){
			if(err){
				console.log("error finding user");
			}else{
				new_issue = new Issue(req.body);
				new_issue._user = req.body.id;
				singleUser.issues.push(new_issue);
				new_issue.save(function(err){
					singleUser.save(function(err){
					if(err){
						console.log("issue adding an issue");
					}else{
						console.log("added issue successfully");
					}
				})
			})
			}
		})
	}


}