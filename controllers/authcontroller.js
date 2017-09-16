var db = require("../models");
var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}
exports.signin = function(req, res) {
 
    res.render('signin');
    //res.send("testing singin get router");
 
}
exports.dashboard = function(req, res) {
 
    res.render('dashboard');
 
}

exports.all = function(req, res) {
db.student.findAll({}).then(function(results) {
	var hbsObject = {
		students: results
	}
	res.render('all', hbsObject);
  });
	

}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}