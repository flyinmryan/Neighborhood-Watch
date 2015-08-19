var mongoose = require('mongoose');
var User = mongoose.model('User');
var Issue = mongoose.model('Issue');

module.exports = {
	getIssues : function(req,res){
		Issue.find({}).populate('_user').exec(function(err,data){
			if(err){
				console.log("error finding issues");
			}else{
				console.log("found issues",data);
				res.json(data);
			}
		});
	},
	addIssue : function(req,res){
		//console.log(req.body);
		User.findOne({_id:req.body.id},function (err,singleUser){
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
				});
			});
			}
		});
	},
	addComment : function(req,res){
		
	},
	delete: function (req, res){

	},
	updateStatus: function (req, res){

	}
};