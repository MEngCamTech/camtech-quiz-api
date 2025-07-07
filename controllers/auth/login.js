const moment = require('@utils/moment');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { User, UserToken } = require('@models');
const secret = process.env.JWT_SECRET

module.exports = async (req, res) => {
  const { countryCode, phone, password, otp } = req.body;

  const user = await User.findOne({ where: { countryCode, phone } });
  if (!user) return res.status(401).json({ message: 'Invalid user' });

  let isValid = false;

  if (password && user.password) {
    isValid = await bcrypt.compare(password, user.password);
  } else if (otp && user.otp === otp) {
    isValid = true;
  }

  if (!isValid) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id, phone: user.phone }, secret, { expiresIn: '1y' });

  await UserToken.create({
    userId: user.id,
    token,
    expiresAt: moment().add(1, 'year') // 1 year
  });

  return res.json({ token });
}