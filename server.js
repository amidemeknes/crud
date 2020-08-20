
//Imports
var express = require('express');
var apiRouter = require('./ApiRouter').router;
// import path from 'path';
var path = require('path');
//Init Server
var serveur = express();

serveur.use(express.static(path.join(__dirname, '/build')));

//Configure routes
serveur.use('/api/', apiRouter);

serveur.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/build/index.html'));
})
//Launch server
serveur.listen(4000, function () {
        console.log('server en écoute sur port 4000');
});