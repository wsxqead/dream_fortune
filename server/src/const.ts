const AUTH_SECRET: string = process.env.AUTH_SECRET || 'dreamssample'
const ACCESS_COOKIE_KEY: string = 'dream_access'
const APP_HOSTNAME: string = process.env.APP_HOSTNAME || ''
const cookieDomain: string = 'localhost'

const COOKIE_CONFIG: { domain: string } = {
  domain: cookieDomain
}

const accessToken_expire = 3600 * 24 * 2

const globalConsts = {
  AUTH_SECRET,
  ACCESS_COOKIE_KEY,
  APP_HOSTNAME,
  COOKIE_CONFIG,
  accessToken_expire
}

export default globalConsts
