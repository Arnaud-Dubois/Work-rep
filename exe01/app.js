// console.log('test de node');

//var fs = require("fs");

// Ouvrir le fichier
// Compter le nb de lignes dans le fichier



// fs.readFile('test1.txt','utf-8', (err, data) => {
//   if (err) throw err;
//   var lines = data.split("\r");
//   console.log(data);
//   console.log("--------------------------------------");
//   console.log(`Ce fichier contient ${lines.length} lignes `); // Attention ' ` '
// });


// function get_line_count(file, cb) {
//     var count = 0;
//     fs.createReadStream(file)
//         .on('data', function(chunk) {
//             for (var i = 0; i < chunk.length; i++)
//                 if (chunk[i] == 10) count++;
//         })
//         .on('end', function() {
//             cb(null, count)
//         })
//         .once('error', cb);
// }

// get_line_count('test1.txt', console.log);


// ------------------------------------------------------------------------

// console.log(process.argv[3]);
//console.log(process.config.variables);

let fs = require('fs');
let names = process.argv[2];
let filePath = 'test1.txt';
fs.readFile(filePath, 'utf8', function(err, data){
	

	if(err) throw err;

	let inData = data+"\n"+names.replace(/,/g, "\n")+"\n";
	fs.writeFile(filePath, inData, (err) => {
		if (err) throw err;
		console.log('it\'s saved');
	});
});

