const { User } = require("../../models")

module.exports = async (req, res, next) => {
    const user = req.user
    const { firstName, lastName } = req.body

    await User.update({ firstName, lastName }, { where: { id: user.id } })
    const userTb = await User.findOne({
        where: { id: user.id },
        attributes: { exclude: ["password", "otp"] },
    })

    return res.json(userTb)
}