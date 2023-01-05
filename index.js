const express = require("express");
const path = require("path");
const cookieSession = require("cookie-session");
const bcrypt = require("bcrypt");
const dbConnection = require("./database");
const { body, validationResult } = require("express-validator");

const app = express();
app.use(express.urlencoded({ extended: false}));

// SET OUR VIEWS AND VIEW ENGINE
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 3600 * 1000 // 1hr
}))
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/css', express.static(__dirname + 'public/js'));
app.use('/css', express.static(__dirname + 'public/images'));

// DECLARING CUSTOM MIDDLEWARE
const ifNotLoggedin = (req, res, next) => {
    if(!req.session.isLoggedIn){
        return res.render('pages/login-signup');
    }
    next();
}
const ifLoggedin = (req,res,next) => {
    if(req.session.isLoggedIn){
        return res.redirect('pages/index');
    }
    next();
}
// END OF CUSTOM MIDDLEWARE

// ROOT PAGE
app.get('/', ifNotLoggedin, (req,res,next) => {
    dbConnection.execute("SELECT `name` FROM `users` WHERE `id`=?",[req.session.userID])
    .then(([rows]) => {
        res.render('pages/index',{
            name:rows[0].name
        });
    });
    
});// END OF ROOT PAGE

// Navbar render
app.get("/index", function (req, res) {
    res.render("pages/index");
});

app.get("/login-signup", function (req, res) {
    res.render("pages/login-signup");
});

app.get("/contact", function (req, res) {
    res.render("pages/contact");
});

app.get("/reviews", function (req, res) {
    res.render("pages/reviews");
});

app.get("/menu", function (req, res) {
    res.render("pages/menu");
});

app.listen(3000, () => console.log('Server is running..'));