const { UserToken } = require('@models');
const jwt = require('jsonwebtoken');
const moment = require('@utils/moment');
const { Op } = require('sequelize');
const secret = process.env.JWT_SECRET

module.exports = async (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth?.startsWith('Bearer ')) return res.status(401).json({ message: 'No token' });

  const token = auth.split(' ')[1];

  console.log(" moment ", moment().format("DD-MMM-YYYY HH:mm A"))

  try {
    const decoded = jwt.verify(token, secret);

    const tokenRecord = await UserToken.findOne({
      where: {
        token,
         revokedAt: {
            [Op.is]: null
        }
      }
    });
 
    if (!tokenRecord || tokenRecord.expiredAt) {
      return res.status(401).json({ message:  `Token expired or revoked at ${tokenRecord.expiredAt}` }); 
    } 

    req.user = decoded;
    next();
  } catch (err) {
    console.log(err)
    return res.status(401).json({ message: 'Invalid token' });
  }
};
