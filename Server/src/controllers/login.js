const {User } = require("../DB_connection");

const login = async () => {
    const  {email, password} = req.query;

    try {
        if(!email || !password) 
        return res.status(400).json({error: 'Invalid data'});

        const loggedUser = await User.findOne({
            where: {email}, 
        });

        if(!loggedUser) return res.status(404).json({error: 'User not found'});

        return loggedUser.password === password ? res.status(200).json({access: true}):
        res.status(401).json({error: 'Invalid password' })

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = login;





