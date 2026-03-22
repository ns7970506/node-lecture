const fs = require('fs')
const sumRequestHandler = (req,res)=>{
    console.log('In Sum Request handler',req.url);
    const body = [];
    req.on('data',chunk => body.push(chunk))
    req.on('end',()=>{
      const bodyStr = Buffer.concat(body).toString();
      const params = new URLSearchParams(bodyStr)
      const bodyObj = Object.fromEntries(params)
      const result = Number(bodyObj.first) + Number(bodyObj.second)
      res.setHeader('Content-Type','text/html')
      res.write(`
        <html>
        <body>
        <head><title>Practice set</title></head>
        <h1>Your Sum is ${result}</h1>
        </body>
        </html>`)
        fs.writeFileSync('Calculator.txt',JSON.stringify(result))
        return res.end();
    })
 }
exports.sumRequestHandler = sumRequestHandler