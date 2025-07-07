const { User, UserOtp } = require('@models');
const moment = require('@utils/moment');
const { Op } = require('sequelize');

module.exports = async (req, res) => {
  const { phone, countryCode, otp, password } = req.body;

  if (!phone || !otp || !countryCode || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // 1. Find valid OTP
  const otpRecord = await UserOtp.findOne({
    where: {
      countryCode,
      phone,
      otp,
      // isUsed: false,
      // expiredAt: { [Op.gt]: moment() } // Not expired

    }
  });
    
  if (!otpRecord) {
    return res.status(400).json({ message: 'Invalid or expired OTP' });
  }

  // 2. Check if user already exists
  const existingUser = await User.findOne({ where: { phone, countryCode } });
  if (existingUser) {
    return res.status(409).json({ message: 'User already exists' });
  }

  // 3. Create new user
  const bcrypt = require('bcrypt');
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    phone,
    countryCode,
    password: hashedPassword
  });

  // 4. Mark OTP as used
  otpRecord.used = true;
  await otpRecord.save();

  return res.status(201).json({
    message: 'User created successfully',
    userId: newUser.id
  });
};