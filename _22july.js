const http=require("node:http")
const blogPost=[
    {
        "blogTitle":"This is title of blog",
        "blogDescription":"Tjis is description of blog",
        "authorBlog":"Sidharth",
        "date":"22 july 2025"

    }
    
]
const server=HTMLOutputElement.createServer((req,res)=>{
    // res.writeHead(200,{'Content-Type':'text/plain'})
    // res.end("Data fetched")
    if(req.method=="GET"&&req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end("Data fetched")
    }
    else if(req.method=="GET"&&req.url=='/blog'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end(blogPost)
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'})
        res.end("Not found")
    }

    
})
server.listen(8000,()=>{
    console.log("Your server running on port 8000")
})