var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

// Running Server Details.
var server = app.listen(8000, function () {
        var host = server.address().address
        var port = server.address().port
        console.log("Example app listening at %s:%s Port", host, port)
});


app.get('/form', function (req, res) {
        var html='';
        html +="<center><body>";
        html += "<form action='/thank'  method='post' name='form1'>";
        html += "Thr picture you would like to analyze</p><input type= 'text' name='name' size='100'>";
        html += "<input type='submit' value='submit'>";
        html += "<INPUT type='reset'  value='reset'>";
        html += "</form>";
        html += "</body></center>";
        res.send(html);
});






app.post('/thank', urlencodedParser, function (req, res){
        
        var URL =req.body.name;
    
    
    
    

// Imports the Google Cloud client library
const vision = require("@google-cloud/vision");

// Creates a client
const client = new vision.ImageAnnotatorClient();

// Performs label detection on the image file
client
  .labelDetection(URL)
  .then(results => {
    const labels = results[0].labelAnnotations;

    console.log("Labels:");
    //labels.forEach(label => console.log(label.description));
    putin(labels);
  
  })
  .catch(err => {
    console.error("ERROR:", err);
  });


const fileName = 'img/supremeshirt.jpg';


client
  .logoDetection(fileName)
  .then(results => {
    console.log('Logos:');
    var data1=(results[0].logoAnnotations[0].description);
    putin(data1);
 
  })
  .catch(err => {
    console.error('ERROR:', err);
  });


function createHTML(data){

//console.log ("test");
console.log(data);

}
    
    
    
     app.set('view engine', 'hbs');
    
    
                
                
                
             
        
    
    function putin (data1){
        
        
           var html = buildHtml(req);
                
                res.writeHead(200, {
                        'Content-Type': 'text/html',
                        'Content-Length': html.length,
                        'Expires': new Date().toUTCString()
                });
                res.end(html);
                
                
                function buildHtml(req) {
                        var header = 'WHAT HEALTHY MEALS ARE AVAILABLE IN YOUR FRIDGE?';
                        
                        var body = "Labels: "+data1+"\n\n";
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        // concatenate header string
                        // concatenate body string
                        
                        return '<!DOCTYPE html>'
                        + '<html><centre><header><strong>' + header+'</strong><br /><br /><br </centre><body>' + body+'<br />'+ '</centre>';
                };
    }
    

        
        
        
        
        
        });
        
