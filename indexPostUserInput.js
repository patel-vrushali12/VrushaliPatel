const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.post('/addUser',function(req,res)
{
    var uname=req.body.user;
    var pass=req.body.pwd;
	var mysql=require('mysql');
	var con=mysql.createConnection({
	host:'172.21.170.15',
	user:'sybca',
	password:'sybca',
	database:'sybca_2017'});//eo creat conn
    
	con.connect();
    var sql="insert into login_27 values('"+uname+"','"+pass+"');"
	con.query(sql,function(err,rows,fields)
	{
		if (err)
		{
			 console.log(err);
			 res.send("Err encountered");
	
		} else 
		{	
			
			res.send(rows+'insertion Succesful');
		} 
		
});// eo con.query
con.end();
});// app.get

app.listen(8000, function ()
{
  console.log('Example app listening on port 8000!')
});