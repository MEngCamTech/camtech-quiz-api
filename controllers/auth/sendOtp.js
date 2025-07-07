const { UserOtp } = require('@models');
const moment = require('@utils/moment');

const sendOtpApi = require('@apis/plasgate/sendOtpApi');

module.exports = async (req, res) => {
  const { countryCode, phone } = req.body;

  if (!countryCode || !phone) {
    return res.status(400).json({ message: 'countryCode and phone are required' });
  }

 
  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Save OTP to user.otp
  const expiredAt = moment().add(3, "minute").standard()

  await UserOtp.create({countryCode,phone,otp, expiredAt })
  
  sendOtpApi(`${countryCode}${phone}`, otp)

  // Simulate sending OTP (replace with SMS service in real app)
  console.log(`📤 OTP for ${countryCode}${phone}: ${otp}`);

  // Respond with OTP only in dev
  return res.json({
    message: 'OTP sent successfully',
    userOtp: process.env.NODE_ENV === 'development' ? otp : undefined
  });
};