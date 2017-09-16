var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport) {
    app.get('/', function(req, res) {
        res.redirect('/signin');
    });
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.get('/dashboard', authController.dashboard);
    app.get('/all', authController.all);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/signin',
 
        failureRedirect: '/signup',
        
        failureFlash : true
        }
        ));
    app.get('/dashboard',isLoggedIn, authController.dashboard);
    app.get('/logout',authController.logout);

    // app.post('/', passport.authenticate('local-signin',  { 
    //     successRedirect: '/add',
    //     failureRedirect: '/signin',
    //     badRequestMessage : 'Incorrect username or password.',
    //     failureFlash : true
    //     }
    //     ));
    app.post('/signin', passport.authenticate('local-signin',  { 
        successRedirect: '/dashboard',
        failureRedirect: '/',
        badRequestMessage : 'Incorrect username or password.',
        failureFlash : true
        }
        ));


    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
        }
}