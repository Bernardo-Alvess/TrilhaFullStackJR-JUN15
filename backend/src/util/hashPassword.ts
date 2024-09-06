import bcrypt from 'bcrypt';

export function hashPassword(password: string): string {

    const saltRounds = 10;
    try {
        const hashedPassword = bcrypt.hashSync(password, saltRounds)
        return hashedPassword;
    } catch (e) {
        throw new Error(`Error hashing password: ${e}`)
    }
}

