//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
//app.use(express.static(__dirname + '/dist/AuChaletGourmand'));
app.use(express.static(__dirname + '/UnderConstruction'));

app.get('/', function(req,res) {
    res.redirect('/underconstruction');
    //res.sendFile(path.join(__dirname+'/dist/AuChaletGourmand/index.html'));
});
app.get('/underconstruction', function(req, res) {
    res.sendFile(path.join(__dirname + '/UnderConstruction/index.html'))
})

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);