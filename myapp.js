var express = require('express');
var upload = require('express-fileupload');
var sphp = require('sphp');
var app = express();
 var fs=require('fs');
app.use(sphp.express('public/'));

app.use(upload()); //__dir and not _dir

app.use(express.static('public/'));

var port = 8090; // you can use any port
app.listen(port);

app.post('/', function(req, res){
  
    
    var w=req.files.file_name_attribute.length;

   if(w >1){
    req.files.file_name_attribute.forEach(function (file, index, array) {
        var filename = file.name;
        file.mv('./public/uploads/'+filename, function(err){
            if(err){ res.send(err)}
            if (index === array.length - 1) {
                res.sendFile('public/index.html' , { root : __dirname});
              }
        
        });
       
        
    }); 
}
else{
    var file= req.files.file_name_attribute;
        var filename = file.name;
        file.mv('./public/uploads/'+filename, function(err){
            if(err){ res.send(err)}
        
        });
   
    res.sendFile('public/index.html' , { root : __dirname});
}

});
/*
app.post('/vivek',function(req, res){     
    if(req.files){
        console.log(req.files);
        var file= req.files.file_name_attribute;
        var filename = file.name;
        console.log(filename);  // filename 
        // moving file into upload folder
        file.mv('./public/uploads/'+filename, function(err){
            if(err){ res.send(err)}
         
           res.sendFile('public/index.html' , { root : __dirname});
         //  res.sendFile("./public/index.html");

        });
    }
    else
    console.log("file not selected")
} );
*/
 
function getLocalIp() {
    const os = require('os');
    console.log("\n\n************         SERVER  STARTED ......     ***********\n")
    console.log(" Server is running at any following addresses \n");
    var i=1;
    for(let addresses of Object.values(os.networkInterfaces())) {
        for(let add of addresses) {
               if(add.address.length < 20){
                console.log(i+".  "+add.address +":"+port);
                i++;    
               }
            
        }
    }
    console.log("\n If you connect to the LAN after the server starts, please restart the server! \n\n ")
    
}

getLocalIp();
