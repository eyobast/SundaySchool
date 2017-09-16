var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}
exports.signin = function(req, res) {
 
    // res.render('signin');
    res.send("testing singin get router");
 
}
exports.dashboard = function(req, res) {
 
    res.render('dashboard');
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}