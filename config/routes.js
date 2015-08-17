
  var topics = require('./../server/controllers/topics.js');

  module.exports = function(app) {

    app.get('/', function(req, res){
      topics.dashboard (req, res);
    });  
    // app.get('/topic/:id',function(req, res){
    //   topics.topic (req,res);
    //   });  

    app.get('/get_topics', function(req, res) {
      topics.get_topics(req,res)
    });

    app.post('/add_topic',function(req,res){
    	topics.add_topic(req,res)
    });

    app.get('/get_one_topic/:id',function(req,res){
      topics.get_one_topic(req,res)
    });

    app.post('/add_post',function(req,res){
      topics.add_post(req,res)
    });

    app.get('/like_post/:id',function(req,res){
      topics.like_post(req,res);
    })

  };

  
 