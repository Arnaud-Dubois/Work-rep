const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const fs = require("fs");
const routeMgt = require('./modules/routeMgt');
const server = http.createServer((req, res) => {
	
	let url = req.url;
	console.log(url);
	if(url.indexOf('.jpg') !== -1) {
		res.statusCode = 200;
		let readStream = fs.createReadStream(`public${url}`);
		readStream.on('open', function() {
			readStream.pipe(res);
		});
		readStream.on('error', function(err) {
			res.end(err);
		});
	} else {
			routeMgt(req,res);

	};
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});