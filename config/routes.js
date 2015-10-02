
  var users = require('./../server/controllers/users.js');

  module.exports = function(app) {

    app.get('/', function(req, res){
      users.show_index (req, res);
    });  

    app.post('/login', function(req, res) {
      
      users.login(req,res);

    });

    app.get('/get_issue/:id',function(req,res){

      users.get_issue(req,res);
    });

    app.post('/register',function(req,res){
      //console.log(req.body);
      users.register(req,res);
    })

     app.post('/addIssue',function(req,res){
      users.addIssue(req,res);
    })

    app.post('/changeStatus',function(req,res){
      users.changeStatus(req,res);
     })

    app.get('/getIssues',function(req,res){
      users.getIssues(req,res);
     })

     app.post('/addComment',function(req,res){
      //console.log(req.body);
      users.addComment(req,res);
     })
  };

  
 