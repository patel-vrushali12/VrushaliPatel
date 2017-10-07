const express = require('express');
const app = express();

app.get('/',function(req,res)
{
	var mysql=require('mysql');
	var con=mysql.createConnection({
	host:'172.21.170.15',
	user:'sybca',
	password:'sybca',
	database:'sybca_2017'});//eo creat conn			
	con.connect();
	con.query('SELECT * FROM login_27',function(err,rows,fields)
	{
		if (err)
		{
			 console.log(err);
			 res.send("Err encountered");
	
		} else if(rows.length > 0)
		{	
			var i;
			var str;
			for(i=0;i<rows.length;i++)
			{
		 		str+="<br/>2 Username : "+rows[i].UserName;
			}
			res.send(str);
			res.send('Connection Succesful');
		} else 
		{
		  res.send("No Records");
		}
		
});// eo con.query
con.end();
});// app.get

app.listen(8000, function ()
{
  console.log('Example app listening on port 8000!')
});