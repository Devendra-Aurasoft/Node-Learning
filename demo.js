var http = require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{'Contant-Type':'application\json'})
    res.write("Hello Dev")
})