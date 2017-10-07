const express = require('express');
const app = express();

app.post('/addUser',function(req,res)
{
	var mysql=require('mysql');
	var con=mysql.createConnection({
	host:'172.21.170.15',
	user:'sybca',
	password:'sybca',
	database:'sybca_2017'});//eo creat conn			
	con.connect();
	con.query("insert into login_27 values('admin','admin1')",function(err,rows,fields)
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