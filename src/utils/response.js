import HttpStatus from 'http-status-codes';

export const format = (data, message, code) => {
    return {
        data,
        message,
        code: getStatusCode(code)
    }
};

const getStatusCode = (code) => {
    let statusCode;

    switch (code) {
        case 200:
            statusCode = HttpStatus.OK;
            break;
        case 201:
            statusCode = HttpStatus.CREATED;
            break;
        case 401:
            statusCode = HttpStatus.UNAUTHORIZED;
            break;
        case 403:
            statusCode = HttpStatus.FORBIDDEN;
            break;
        case 400:
            statusCode = HttpStatus.BAD_REQUEST;
            break;
        case 404:
            statusCode = HttpStatus.NOT_FOUND;
            break;
        case 409:
            statusCode = HttpStatus.CONFLICT;
            break;
        case 410:
            statusCode = HttpStatus.GONE;
            break;
        case 500:
            statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
            break;
    }

    return statusCode;
}

