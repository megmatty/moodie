
// // const AuthenticationController = require('./controllers/authentication');

// const EntryController = require('./controllers/entries');

// const express = require('express');
// const router = express.Router();
// const passport = require('passport');

// // const passportService = require('./config/passport');

// module.exports = function (app) {
//  //Our routes

// // Set url for API group routes
// // app.use('/api', apiRoutes);
// app.post('/api', EntryController.addEntry);

// app.get('/dashboard', EntryController.findAllEntries);

// // app.get('/profile', UserController.viewProfile);

// };





// router.get('/', (req, res) => {
//     res.render('index', { user : req.user });
// });

// router.get('/register', (req, res) => {
//     res.render('register', { });
// });

// router.post('/register', (req, res, next) => {
//     Account.register(new Account({ username : req.body.username }), req.body.password, (err, account) => {
//         if (err) {
//           return res.render('register', { error : err.message });
//         }

//         passport.authenticate('local')(req, res, () => {
//             req.session.save((err) => {
//                 if (err) {
//                     return next(err);
//                 }
//                 res.redirect('/');
//             });
//         });
//     });
// });


// router.get('/login', (req, res) => {
//     res.render('login', { user : req.user, error : req.flash('error')});
// });

// router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res, next) => {
//     req.session.save((err) => {
//         if (err) {
//             return next(err);
//         }
//         res.redirect('/');
//     });
// });

// router.get('/logout', (req, res, next) => {
//     req.logout();
//     req.session.save((err) => {
//         if (err) {
//             return next(err);
//         }
//         res.redirect('/');
//     });
// });

// router.get('/ping', (req, res) => {
//     res.status(200).send("pong!");
// });

// // module.exports = router;