const os = require("os");
// console.log(os.userInfo());
// console.log(os.uptime());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.type());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.release());

const path = require("path");
// console.log(path.basename('C:\\temp\\myfile.html'));
// console.log(path.sep);
// console.log(path.dirname('C:\\temp\\myfile.html'));
// console.log(path.extname('C:\\temp\\myfile.html'));
// console.log(__filename,path.extname(__filename));
// console.log(path.join("/content/","subfolder","test.txt"));
// console.log(path.join(__dirname,"/content/","subfolder","test.txt"));

const fs = require("fs");
          //OR
// const {readFile,writeFile} = require("fs");       //Destructuring method

// fs.readFile("file1.txt", "utf8", (err, data) => {
//   console.log(err, data);
// });

// const a = fs.readFileSync("file.txt");  
// console.log(a.toString());

// fs.writeFile('file1.txt',"NodeJs is amazing runtime environment for JS",()=>{
//     console.log("Written");
// });

// fs.writeFileSync('file.txt',"heheh");
// fs.writeFileSync('file.txt',"hatteh",{flag:'a'});



// console.log(__filename);
// console.log(__dirname);
// console.log(process);            //GLOBAL VARIABLES  IN NODEJS
// console.log(require);
// console.log(module);


const http  = require('http');

const server = http.createServer((req,res)=>{
    res.end("Connected to server");
})

const port=4000;
server.listen(port,()=>{
    console.log(`Connected successfully to port:${port}`)
})

console.log("Finished Reading file");
