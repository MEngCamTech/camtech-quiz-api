const db = require("../../models")

const listQuestion = async (req, res, next)=>{
    const resp =  await db.Question.findAll();

  
    await sleep(8000);

    return res.json(resp)
}
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}



module.exports = listQuestion