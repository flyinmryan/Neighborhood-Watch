var mongoose = require('mongoose');
var User = mongoose.model('User');

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
				//res.redirect('/get_topics');
						}
					})
				}
			}
		});
	}


}