const bcrypt = require('bcrypt');
const { User } = require("../../models")

module.exports = async (req, res, next) => {
    const user = req.user
    const { password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10);

    const updateCount =  await User.update({ password: hashedPassword }, { where: { id: user.id } })
    
    if(updateCount[0] > 0){
        return res.json({message:"Your password is updated sucessfully"})
    }else{
        return res.json({message:"Your password can not be updated"})
    }

     
}