const path = require('path');
const express = require('express');
const server = express();

const mainRoute = require('./routes/main.js');
const menRoute = require('./routes/men.js');
const womenRoute = require('./routes/women.js');
const kidsRoute = require('./routes/kids.js');
const outletRoute = require('./routes/outlet.js');

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use(express.static(path.join(__dirname, 'public')));

server.use('/', mainRoute);
server.use('/', menRoute);
server.use('/', womenRoute);
server.use('/', kidsRoute);
server.use('/', outletRoute);


server.listen(8000);


