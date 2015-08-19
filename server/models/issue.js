
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IssueSchema = new mongoose.Schema({
  title: String,
  description : String,
  street : String,
  _user :  {type: Schema.ObjectId, ref: 'User'},
  comments : [{
  			comment : String,
  			mail : String,
  			created : {type: Date, default: Date.now }
  }],
  created: {type: Date, default: Date.now },
  issue_status : {type: String, default: 'open' },
  priority : String
});

mongoose.model('Issue', IssueSchema);


