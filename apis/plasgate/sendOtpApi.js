const axios = require('axios');
const normalizePhoneNumber = require("@utils/phone/normalizePhoneNumber")
const senderName = "PlasGateUAT";

const baseUrl = 'https://cloudapi.plasgate.com';
const privateKey = 'ZTAy65j66wAGNea1PNTAGlVtbectDEdxTUL4t4UHyDhLv4TsfTkzNwESOjiGnJWYh-MVlstEU5OBmrqiVUKXzg';
const secretKey = '$5$rounds=535000$jXTDxYOSccXYrbKh$WjBzk/XjnXQ4yLaVzZk9IWqtGMBS8/3iGILhQLo6eU9'

const sendOtpApi = async (phone, otp) => {

    try {
        const formattedPhone = normalizePhoneNumber(phone)
        let data = JSON.stringify({
            "sender": senderName,
            "to": formattedPhone,
            "content": `Your CamTech Quiz OTP is ${otp}, please don't share with other.`
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${baseUrl}/rest/send?private_key=${privateKey}`,
            headers: {
                'X-Secret': secretKey,
                'Content-Type': 'application/json'
            },
            data: data
        };
        const resp = await axios.request(config);
    
    } catch (error) {
        console.log(error);
        return error

    }

}

module.exports = sendOtpApi