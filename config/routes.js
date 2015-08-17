
  var users = require('./../server/controllers/users.js');

  module.exports = function(app) {

    app.get('/', function(req, res){
      users.show_index (req, res);
    });  
    // app.get('/topic/:id',function(req, res){
    //   users.topic (req,res);
    //   });  

    app.post('/login', function(req, res) {
      users.login(req,res)
    });

    app.post('/register',function(req,res){
      //console.log(req.body);
      users.register(req,res);
    })

    app.get('/get_one_topic/:id',function(req,res){
      users.get_one_topic(req,res)
    });

    app.post('/add_post',function(req,res){
      users.add_post(req,res)
    });

    app.get('/like_post/:id',function(req,res){
      users.like_post(req,res);
    })

  };

  
 