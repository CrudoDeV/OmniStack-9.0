//index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
   async store(req,res){
        const { email } = req.body;

        const user = await User.Create({ email });
        
        return res.json(user);
    }
};
