const server = require("http");
const getCharById = require("./controllers/getCharById");
const characters = require("./utils/data")

const PORT = 3001;

server.createServer((req, res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*"); //CORS

  if(req.url.includes('rickandmorty/character')){
    let id = req.url.split('/').pop();
    getCharById(res,id);
  }

}).listen(PORT, (res)=>{
  console.log(`Listening on port ${PORT}`);
})


///// homework Server

// const {url} = req;

// if(url.includes("/rickandmorty/character")){
//   const id = Number(url.split('/').pop());
//   const character = characters.find((char)=>{
//     return char.id === id;
//   });
//   res.writeHead(200, {"Content-Type":"application/json"});
//   return res.end(JSON.stringify(character))
  
  
// }