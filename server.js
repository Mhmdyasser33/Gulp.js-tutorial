// import static server module
const static_server = require("static-server") ;

const server = new static_server({
rootPath : './dist/' ,
port : 5000
})

server.start(() =>{
      console.log(`server start at port ${server.port}`) ;
})