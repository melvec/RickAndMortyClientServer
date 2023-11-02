
const URL = 'https://rickandmortyapi.com/api/character/';
const axios = require('axios');

const getCharById = async (req, res) => {


try {
  const {id} = req.params;
  const { name, gender, species, origin, image, status} = (await axios(URL + id)).data;
  const character = {id, name, gender, species, origin, image, status};

  return character.name
  ? res.json(character)
  : res.status(404).send('character not found');

} catch (error) {
  return res.status(500).send(error.message)
}

/* */
  //  axios(URL + id).then(({data} )=> {
  //     const { name, gender, species, origin, image, status} = data;
  //     const character = {id, name, gender, species, origin, image, status};

  //     return character.name
  //     ? res.json(character)
  //     : res.status(404).send('character not found');
  // })
  // .catch((err) => {
  //   return res.status(500).send(err.message)
  // })

}

module.exports = getCharById;

// const axios = require("axios");

// const getCharById = (res, id) => {
//   axios(`https://rickandmortyapi.com/api/character/${id}`).then(
//     ({ data }) => {
//       const {
//         id,
//         name,
//         gender,
//         species,
//         origin: { name: origin },
//         image,
//         status,
//       } = data;
//       let character = {
//         id,
//         name,
//         gender,
//         species,
//         origin,
//         image,
//         status,
//       };

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(character));
//     }
    
//   )
//   .catch((error) => {
//     res.writeHead(500, { "Content-Type": "text/plain" });
//     res.end(error.message);
//   });
// };

// module.exports = getCharById;