
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IssueSchema = new mongoose.Schema({
  title: String,
  description : String,
  _customer :  {type: Schema.ObjectId, ref: 'User'},
  comments : [{
  			comment : String,
  			name : String,
  			created : {type: Date, default: Date.now }
  }],
  created: {type: Date, default: Date.now },
  issue_status : {type: Boolean, default: false }
});

mongoose.model('Complaint', IssueSchema);


