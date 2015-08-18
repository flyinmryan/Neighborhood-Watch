
  var users = require('./../server/controllers/users.js');

  module.exports = function(app) {

    app.get('/', function(req, res){
      users.show_index (req, res);
    });  

    app.post('/login', function(req, res) {
      users.login(req,res)
    });

    app.post('/register',function(req,res){
      //console.log(req.body);
      users.register(req,res);
    })

     app.post('/addIssue',function(req,res){
      users.addIssue(req,res);
    })

     app.get('/getIssues',function(req,res){
      users.getIssues(req,res);
     })

  };

  
 