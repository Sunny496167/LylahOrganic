class CustomAPIError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

class BadRequestError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = 400;
    }
}

class UnauthenticatedError  extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = 401;
    }
}

class NotFoundError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = 404;
    }
}

class ForbiddenError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = 403;
    }
}

class ConflictError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = 409;
    }
}

class InternalServerError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = 500;
    }
}

module.exports = {
    CustomAPIError,
    BadRequestError,
    UnauthenticatedError ,
    NotFoundError,
    ForbiddenError,
    ConflictError,
    InternalServerError
};