const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
});

server.on('request',(req,res)=>{
    // fs.readFile("input.txt",function(err,data){
    //     if(err)return console.error(err);
    //     res.end(data.toString());
    // })

    // const rstream = fs.createReadStream("input.txt");
    // rstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata);
    // });

    // rstream.on("end",()=>{
    //     res.end();
    // })

    // rstream.on('error',(err)=>{
    //        console.log(err);
    //        res.end("file not found");
    // })

    const rstream = fs.createReadStream("input.txt");
    const wstream =  fs.createWriteStream("output1.txt");
    // rstream.pipe(wstream).on('error',console.error);
     res.end("Hii");
     process.stdin.pipe(wstream);
})

server.listen(3000,()=>{
    console.log("server is listning 3000 port");
});

