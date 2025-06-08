const db = require("../../models")

const listQuestion = async (req, res, next)=>{
    const resp =  await db.Question.findAll();

    return res.json(resp)
}



module.exports = listQuestion