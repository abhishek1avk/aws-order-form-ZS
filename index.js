const http = require('http');
const fs = require('fs');
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();
// Server configuration
const port = process.env.PORT || 5000
// Render page
fs.readFile('index.html', function (err, html) {
 if (err) {
 	throw err; 
 } 
 const server = http.createServer(function(request, response) { 
 	response.writeHeader(200, {"Content-Type": "text/html"}); 
 	response.write(html); 
 	response.end(); 
 }).listen(port, () => {
	  console.log(`Server running at http://${port}/`);
    });
});