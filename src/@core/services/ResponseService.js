import responseHelper from "@core/helpers/responseHelper";


export function sendResponse(res, status, data, message, statusCode = 200, apiVersion = null) {
    let obj = {
        status,
        data,
        message,
        apiVersion: apiVersion || 'No Version',
    };

    return res.status(statusCode).json(obj);
};

export function buildResponse({ statusCode, message, data }) {
    console.log('responseHelper(statusCode)', responseHelper(statusCode))
    return {
        status: false,
        statusCode,
        ...responseHelper(statusCode),
        message,
        data: data
    };
};

export function sendResponse2(res, data = null, statusCode = 200, message = null, apiVersion = null, status = true) {
    let obj = { status, apiVersion: apiVersion || 'No Version', statusCode, ...responseHelper(statusCode), data };
    if (message) {
        obj['message'] = message;
        obj['_message'] = 'Custom Message';
    }
    return res.status(statusCode).json(obj);
}