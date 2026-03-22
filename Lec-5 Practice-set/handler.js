const { sumRequestHandler } = require("./sum");

 
const requesthandler = (req,res)=>{
    console.log(req.url,req.method)
    if(req.url==='/'){
        res.setHeader('Content-type','text/html')
        res.write(`<html>
           <head><title>Calculator</title></head>
           <body>
           <h1>Welcome</h1>
           <a href='/calculator'>Go to calculator </a>

           </body>
           </html>`)
           return res.end();
    }
    else if(req.url.toLowerCase() === '/calculator'){
        res.setHeader('Content-type','text/html')
        res.write(`<html>
           <head><title>Calculator</title></head>
           <body>
           <h1>Here is the Calculator</h1>
           <form action="/calculator-result" method ="POST">
              <input type ='text' placeholder="First Number" name = "first"/>
              <input type ='text' placeholder="Second Number" name = "second"/>
              <input type ="submit" value ="sum">
            </form>
           </body>
           </html>`)
           return res.end();
    }
    else if(req.url.toLowerCase() === '/calculator-result' && req.method === 'POST'){
      return  sumRequestHandler(req,res)
        
    }
    res.setHeader('Content-type','text/html')
        res.write(`<html>
           <head><title>Calculator</title></head>
           <body>
           <h1>404 Page not found</h1>
           <a href='/'>Go to Home </a>
          </body>
           </html>`)
           return res.end();
};
    

exports.requestHandler = requesthandler;