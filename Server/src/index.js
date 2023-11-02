
// const express = require('express');
// const router = require("./routes/index");

// const server = express();


// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header(
//      'Access-Control-Allow-Headers',
//      'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   res.header(
//      'Access-Control-Allow-Methods',
//      'GET, POST, OPTIONS, PUT, DELETE'
//   );
//   next();
// });

// server.use(express.json());
// server.use('/rickandmorty', router)

const server = require('./app');
const { conn } = require('./DB_connection');

const PORT = 3001;

conn.sync({force: true}).then(()=>{
  server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
  })
})






// const server = require("http");
// const getCharById = require("./controllers/getCharById");
// const characters = require("./utils/data")

// const PORT = 3001;

// server.createServer((req, res)=>{
//   res.setHeader("Access-Control-Allow-Origin", "*"); //CORS

//   if(req.url.includes('rickandmorty/character')){
//     let id = req.url.split('/').pop();
//     getCharById(res,id);
//   }

// }).listen(PORT, (res)=>{
//   console.log(`Listening on port ${PORT}`); 
// })

 
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