const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const expressLayout = require('express-ejs-layouts');
var cors = require('cors');



app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(cors());
//app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(expressLayout);

app.use('/',require('./routes/router.js'));

app.listen(port,function(){
    console.log("Started running");
});
