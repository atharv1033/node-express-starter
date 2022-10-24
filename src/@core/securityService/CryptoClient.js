import crypto from 'crypto'
import logger from '../services/LoggingService'

const algorithm = 'aes-128-ccm'
// eslint-disable-next-line no-undef
const iv = Buffer.from(process.env.ENCRYPT_IV, 'hex')
// eslint-disable-next-line no-undef
const key = Buffer.from(process.env.ENCRYPT_KEY, 'hex')

export function hash(plainText) {
    try {
        return crypto.createHash('md5').update(plainText).digest('hex')
    } catch (error) {
        logger.consoleErrorLog('core SECURITY', 'Error in hash', error)
        return null
    }
}


export function encrypt(plainText) {
    try {
        const crypt = crypto.createCipheriv(algorithm, key, iv).update(plainText)
        // eslint-disable-next-line no-undef
        return Buffer.concat([crypt]).toString('hex')
    } catch (error) {
        logger.consoleErrorLog('core SECURITY', 'Error in hash', error)
        return null
    }
}

export function decrypt(cipherText) {
    try {
        // eslint-disable-next-line no-undef
        const encryptedText = Buffer.from(cipherText, 'hex')
        const decrypt = crypto.createDecipheriv(algorithm, key, iv).update(encryptedText)
        // eslint-disable-next-line no-undef
        return Buffer.concat([decrypt]).toString()
    } catch (error) {
        logger.consoleErrorLog('core SECURITY', 'Error in hash', error)
        return null
    }
}

