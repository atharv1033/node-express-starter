import moment from 'moment'

import { MYSQL_MOMENT_DATETIME_FORMAT, MYSQL_MOMENT_DATE_FORMAT } from './constant'

export const getObjOrNull = (value) => {
    if (!value) {
        return null
    }
    return value
}

export const removeRepetitions = (array) => {
    let new_arr = []
    
    for (let i = 0; i < array.length; i++) {
        const item = array[i]
        if (!new_arr.includes(item)) {
            new_arr.push(item)
        }
    }
    return new_arr
}

export const getDateTimeOrNull = (value) => {
    if (value) {
        let date = moment(value).format(MYSQL_MOMENT_DATETIME_FORMAT)
        return (date === 'Invalid date') ? null : date
    } else {
        return null
    }
}

export const getDateOrNull = (value) => {
    if (value) {
        let date = moment(value).format(MYSQL_MOMENT_DATE_FORMAT)
        return (date === 'Invalid date') ? null : date
    } else {
        return null
    }
}