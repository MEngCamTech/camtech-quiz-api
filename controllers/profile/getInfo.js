const { User } = require("../../models")

module.exports = async (req, res, next) => {
    const user = req.user
    const userTb = await User.findOne({
        where: { id: user.id },
        attributes: { exclude: ["password","otp"] }
    })

    return res.json(userTb)
}