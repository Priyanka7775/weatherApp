const http = require("http");

const url='https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8e8d7d82a30998cbfa031feced1b5b80';


const server=http.createServer(function(request,response){
    
    var request=require('request');
    request(url,function(err,red,body){
        var data=JSON.parse(body);
        response.write("<h1 style='margin-left:500px ; margin-top:50px ; color='blue'>"+'WEATHER APP'+"<h1/><hr/>");
        response.write("<html><body><div id='container' style='margin-left:300px'>");
        response.write("<h4>"+ 'City Name-:'+data['name']+"</h4>");
        response.write("<h4>"+'Temprature-:' + data.main['temp'] +"</h4>");
        response.write("<h4>"+'Temprature Min-: ' + data.main['temp_min'] +"</h4>");
        response.write("<h4>"+'temprature Max-:' + data.main['temp_max'] +"</h4>");
        response.write("<h4>"+ 'Wind Speed-:'+data.wind['speed']+"</h4>");
        response.write("<h4>"+ 'Sunrise-:'+data.sys['sunrise']+"</h4>");
        response.write("<h4>"+ 'Sunset-:'+data.sys['sunset']+"</h4>");
      
        console.log(body)
        
    })


}).listen(5000);
