import jwt from 'jsonwebtoken'
import logger from '@core/services/LoggingService'


export function jwtRefreshTokenEncode(payload) {
    try {
        // eslint-disable-next-line no-undef
        return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRE })
    } catch (error) {
        logger.consoleErrorLog('core', 'Error in jwtRefreshTokenEncode', error)
        return null
    }
}

export function jwtRefreshTokenVerify(token) {
    try {
        // eslint-disable-next-line no-undef
        return jwt.verify(token, process.env.JWT_REFRESH_SECRET)
    } catch (error) {
        logger.consoleErrorLog('core', 'Error in jwtRefreshTokenVerify', error)
        return null
    }
}

export function jwtAccessTokenEncode(payload) {
    try {
        // eslint-disable-next-line no-undef
        return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRE })
    } catch (error) {
        logger.consoleErrorLog('core', 'Error in jwtAccessTokenEncode', error)
        return null
    }
}

export function jwtAccessTokenVerify(token) {
    try {
        // eslint-disable-next-line no-undef
        return jwt.verify(token, process.env.JWT_ACCESS_SECRET)
    } catch (error) {
        logger.consoleErrorLog('core', 'Error in jwtAccessTokenVerify', error)
        return null
    }
}

export function jwtDecode(token) {
    try {
        return jwt.decode(token)
    } catch (error) {
        logger.consoleErrorLog('core', 'Error in jwtDecode', error)
        return null
    }
}