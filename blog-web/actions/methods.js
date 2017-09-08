var User = require('../models/user');
var jwt  = require('jwt-simple');
var _ = require('lodash');
var environment = require('../environment/environment');
var functions = {
    authenticate:function(req,res){
        User.findOne({
            name: req.body.name
        },function(err,user){
            console.log(user);
            if(err) throw err;
            if(!user){
                return res.status(403).send({success: false, msg: 'Authenticaton failed: user not found.'});
            }
            else{
                user.comparePassword(req.body.password, function(err, isMatch){
                    if(isMatch && !err) {
                      var token = jwt.encode({exp:(Date.now() + 86400), user:user}, environment.secret);
                      res.json({success: true, id_token: token});
                    } else {
                      return res.status(403).send({success: false, msg: 'Authenticaton failed: wrong password.'});
                    }
                  })
            }
        })
    },    
    
    addNew: function(req, res){
        console.log(req.body);
        if((!req.body.name) || (!req.body.password)){
          console.log(req.body.name);
          console.log(req.body.password);

          res.json({success: false, msg: 'Enter all values'});
        }
        else {
          console.log(req.body)
          var newUser = User({
            name: req.body.name,
            password: req.body.password
          });

          newUser.save(function(err, newUser){
            if (err){
              console.log(err);
              res.json({success:false, msg:'Failed to save'})
            }

            else {
              var token = jwt.encode(newUser, environment.secret);
              res.json({success:true, msg:'Successfully saved', id_token: token});
            }
          })
        }
    }
}



module.exports = functions;