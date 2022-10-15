import { sendResponse } from '@core/services/ResponseService';
import statusType from '@core/enum/statusTypes';
import logger from '@core/services/LoggingService';

export async function Function(req, res) {

    try {


        return sendResponse(res, true, null, 'Api Not Ready Yet');
    } catch (error) {
        logger.consoleErrorLog(req.originalUrl, 'Error in functionName', error);
        return sendResponse(res, false, null, 'Error ', statusType.DB_ERROR);
    }
};