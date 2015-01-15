
var fs = require('fs');



// GOAL:
// {
//     "1": [
//         "/galleria/images/1/abc.jpg",
//         "/galleria/images/1/foo.jpg"
//     ],
//     "2": [
//         "/galleria/images/2/fds.jpg",
//         "/galleria/images/2/uio.jpg"
//     ]
// }

var images = [];
var response = {};

var traverseFileSystem = function (currentPath) {
    console.log(currentPath);
    var files = fs.readdirSync(currentPath);
    for (var i in files) {
       var currentFile = currentPath + '/' + files[i];
       var stats = fs.statSync(currentFile);
       if (stats.isFile()) {
       	console.log(currentFile);

       	// ['/foo.png', /abc.png', ...]
		var f = currentFile.split('/');
  		var fileName = f[f.length - 1];

       	images.push(fileName);
      }
      else if (stats.isDirectory()) {
  		 
  		 var directories = currentFile.split('/');
  		 var directory = directories[directories.length - 1];

  		 console.log(directory);
  		 // response:{1:[], 2:[], ...}
  		 images = [];
  		 response[directory] = images;

         traverseFileSystem(currentFile);
       }
     }
   };

  exports.getImages = function(req, res){
	// traverseFileSystem('./dist/images/galleria');
	traverseFileSystem(karvinenGalleriaImagePath);
	
	res.json({
		images: response
	})
};

