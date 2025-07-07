const { User, UserOtp } = require('@models');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = async (req, res) => {
  const { countryCode, phone, otp, password } = req.body;

  if (!countryCode || !phone || !otp || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // 1. Find OTP and ensure it's valid
  const otpRecord = await UserOtp.findOne({
    where: {
      phone,
      otp,
      isUsed: false,
      expiredAt: {
        [Op.gt]: moment() // Not expired
      }
    }
  });
  console.log(" otpRecord ", otpRecord)

  if (!otpRecord) {
    return res.status(400).json({ message: 'Invalid or expired OTP' });
  }

  // 2. Find user
  const user = await User.findOne({ where: { phone, countryCode } });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // 3. Hash the new password and update user
  const hashedPassword = await bcrypt.hash(password, 10);
  user.password = hashedPassword;
  await user.save();

  // 4. Mark OTP as used
  otpRecord.isUsed = true;
  await otpRecord.save();

  return res.json({ message: 'Password has been reset successfully.' });
};