import bcrypt from 'bcrypt'

async function verifyPassword(plainPassword, hash) {
    return await bcrypt.compare(plainPassword, hash);
}

export default verifyPassword;
