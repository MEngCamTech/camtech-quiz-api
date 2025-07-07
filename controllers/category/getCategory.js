const db = require("../../models")

const getCategory = async (req, res, next) => {

  try{
       console.log(" req.params.id = ", req.params.id)

    const resp = await db.Category.findOne({
        where: { id: req.params.id },
        include: [{ as: 'questions', model: db.Question }]
    });
    return res.json(resp)
  }catch(err){
    return res.json({error: err.message})
  }
}



module.exports = getCategory