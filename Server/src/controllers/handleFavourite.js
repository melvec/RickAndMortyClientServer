let myFavourates = [];

const postFav = (req, res) => {
    myFavourates.push(req.body);
    return res.json(myFavourates);
}

const deleteFav = (req, res) =>{
     const {id} = req.params;
     const favsFiltered = myFavourates.filter((char) => {
        return char.id !==id;
     });
     myFavourates = favsFilteresd;
     return res.json(myFavourates)
}

module.exports = {postFav, deleteFav}