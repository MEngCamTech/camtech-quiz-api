const db = require("../models")

const getHomePage = async (req, res, next)=>{
    const categories =  await db.Category.findAll();

    const banners =  await db.Banner.findAll();
    const promotions =  await db.Banner.findAll();


    return res.json({
        categories,
        banners,
        promotions
    })
    
}
 
 
module.exports = getHomePage