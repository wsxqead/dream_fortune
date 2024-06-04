import * as bcrypt from 'bcrypt'

const SALT_ROUND = 12

class AuthUtil {
  async createHashedPassword(plain: string): Promise<string> {
    return bcrypt.hash(plain, SALT_ROUND)
  }

  async compareWithHash(plain: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plain, hash)
  }

  async validateWithWord(password: string): Promise<string | 'regerror'> {
    const validatePass = /^.*(?=.{8,15})(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[~`!?@#$%^&*()-+=]).*$/
    if (!validatePass.test(password)) {
      return 'regerror'
    }
    return password
  }
}

export default new AuthUtil()
