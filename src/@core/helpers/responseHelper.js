import statusTypes from '@core/enum/statusTypes'
import * as constant from '@core/helpers/constant'

export default function getErrorMessage(code) {
    switch (code) {
        case statusTypes.BAD_REQUEST:
            // BAD_REQUEST
            // CODE: 400
            return { statusCode: statusTypes.BAD_REQUEST, status: false, type: 'Error', message: constant.RESPONSE_MESSAGES[`CODE_${statusTypes.BAD_REQUEST}`] }

        case statusTypes.UNAUTHORIZED:
            // UNAUTHORIZED
            // 401
            return { status: false, type: 'Error', message: constant.RESPONSE_MESSAGES[`CODE_${statusTypes.UNAUTHORIZED}`] }

        case statusTypes.FORBIDDEN:
            // FORBIDDEN
            // 403
            // 'Requested operation is not allowed due to applied rules. Please refer to error details.'
            return { status: false, type: 'Error', message: constant.RESPONSE_MESSAGES[`CODE_${statusTypes.FORBIDDEN}`] }

        case statusTypes.NOT_FOUND:
            // NOT_FOUND
            // 404
            return { status: false, type: 'Error', message: constant.RESPONSE_MESSAGES[`CODE_${statusTypes.NOT_FOUND}`] }

        case statusTypes.METHOD_NOT_ALLOWED:
            // METHOD_NOT_ALLOWED
            // 405
            return { status: false, type: 'Error', message: constant.RESPONSE_MESSAGES[`CODE_${statusTypes.METHOD_NOT_ALLOWED}`] }

        case statusTypes.REQUEST_TIME_OUT:
            // REQUEST_TIME_OUT
            // 408
            return { status: false, type: 'Error', message: constant.RESPONSE_MESSAGES[`CODE_${statusTypes.REQUEST_TIME_OUT}`] }

        case statusTypes.INTERNAL_SERVER_ERROR:
            // INTERNAL_SERVER_ERROR
            // 500
            return { status: false, type: 'Error', message: constant.RESPONSE_MESSAGES[`CODE_${statusTypes.INTERNAL_SERVER_ERROR}`] }

        case statusTypes.NOT_IMPLEMENTED_UNAUTHORIZED:
            // NOT_IMPLEMENTED_UNAUTHORIZED
            // 501
            return { status: false, type: 'Error', message: constant.RESPONSE_MESSAGES[`CODE_${statusTypes.NOT_IMPLEMENTED_UNAUTHORIZED}`] }

        case statusTypes.SERVICE_UNAVAILABLE:
            // SERVICE_UNAVAILABLE
            // 503
            return { status: false, type: 'Error', message: constant.RESPONSE_MESSAGES[`CODE_${statusTypes.SERVICE_UNAVAILABLE}`] }

        case statusTypes.DB_ERROR:
            // DB_ERROR
            // 422
            return { status: false, type: 'Error', message: constant.RESPONSE_MESSAGES[`CODE_${statusTypes.DB_ERROR}`] }

        case statusTypes.SUCCESS:
            // SUCCESS
            // 200
            return { status: true, type: 'OK', message: constant.RESPONSE_MESSAGES[`CODE_${statusTypes.SUCCESS}`] }

        case statusTypes.CREATED:
            // CREATED
            // 201
            return { status: true, type: 'OK', message: constant.RESPONSE_MESSAGES[`CODE_${statusTypes.CREATED}`] }

        default:
            return { status: false, type: 'Error', message: constant.RESPONSE_MESSAGES[`CODE_${statusTypes.REQUEST_TIME_OUT}`] }

    }
}
