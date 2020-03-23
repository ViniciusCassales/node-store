const HTTP = {
    /*1xx Informational */
    CONTINUE : 100,
    SWITCHING_PROTOCOLS: 101,
    PROCESSING: 102,
    EARLY_HINTS: 103,

    /*2xx Success*/
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORATIVE_INFORMATION: 203,
    NO_CONTENTE: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTI_STATUS: 207,
    ALREADY_REPORTED: 208,
    IM_USED: 226,

    /*3xx Redirection*/
    MULTIPLE_CHOICES: 300,
    MOVED_PREMANENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    TEMPORARY_REDIRECT: 307,
    PERMANENT_REDIRECT: 308,

    /*4xx Client errors*/
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,

    /*5xx Server errors*/
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504
}
module.exports = HTTP;