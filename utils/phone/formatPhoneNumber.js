const formatPhoneNumber = (phone) =>{
    // Remove all non-digits
    const digits = phone.replace(/\D/g, '');

    // Assumes format: countryCode(3) + operator(2) + 3 + 3
    if (digits.length === 11) {
        const country = digits.slice(0, 3);
        const operator = digits.slice(3, 5);
        const middle = digits.slice(5, 8);
        const last = digits.slice(8);
        return `(${country}) ${operator} ${middle} ${last}`;
    }

    return phone; // fallback for unexpected formats
}

module.exports = formatPhoneNumber

