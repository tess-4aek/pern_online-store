const ApiError = require('../erorrs/ApiError.js');

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const { id } = req.query;
        if (!id) {
            return next(ApiError.badRequest('Не заданий АЙДІ'));
        }
        res.json(id);
    }
}

module.exports = new UserController();