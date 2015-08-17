
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new mongoose.Schema({
  name: String,
  topic : String,
  description : String,
  category : String,
  posts : [{
  		post : String,
  		name : String,
  		likes : {type: Number, default: 0 },
  		created : {type: Date, default: Date.now }
  }],
  created: {type: Date, default: Date.now }
 
});

mongoose.model('Topic', TopicSchema);


