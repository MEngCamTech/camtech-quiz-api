const db = require("../../models")

const listCategory = async (req, res, next) => {
    const resp = await db.Category.findAll({
     
    });
    return res.json(resp)

}



module.exports = listCategory