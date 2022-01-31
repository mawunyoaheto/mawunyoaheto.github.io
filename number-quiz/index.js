const express = require('express');
const app = express();
const quiz_route = require('./route/quiz_route');
app.set('views', __dirname + '/views');
// app.set("view engine","jade");
app.set("view engine", 'pug');
const cors=require('cors');

// app.use(bodyParser.json ());
// app.use(bodyParser.urlencoded({extended:false}));
app.use(express.urlencoded({ extended: true }));
port=5300;

app.use(cors());
app.use(express.static(__dirname + '/public'));

app.use('/', quiz_route);

app.use(express.static('public'));

app.listen(port, ()=>console.log(`Server running on http://localhost:${port}`));