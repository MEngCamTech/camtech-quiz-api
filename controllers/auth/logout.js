const moment = require('@utils/moment');

const { UserToken } = require('@models');
 
module.exports = async (req, res) => {
  await UserToken.update(
    { revokedAt: moment() },
    { where: { token: req.headers.authorization.split(' ')[1] } }
  );
  res.sendStatus(204);
}