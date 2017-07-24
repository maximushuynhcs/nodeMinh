const express = require('express');
const upload = require('./uploadConfig').single('image');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.listen(3000, () => console.log('Server Stated'));

//Front-End
app.get('/', (req, res) => res.render('./userview/home'));
app.get('/about', (req, res) => res.render('./userview/about'))
app.get('/product', (req, res) => res.render('product'));
app.get('/blog', (req, res) => res.render('./userview/blog'));
app.get('/contact', (req, res) => res.render('./userview/contact'));




app.get('/element', (req, res) => res.render('./userview/element'))

//Login
app.get('/signUP', (req, res) => res.render('signUP'));
app.get('/signIN', (req, res) => res.render('signIN'));

//Back-End
app.get('/admincontroller', (req, res) => res.render('adminhome'));


