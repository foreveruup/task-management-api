const { errorHandler } = require('../../middleware/errorHandler');

const req = {};
const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
};
const next = jest.fn();

describe('Middleware errorHandler', () => {
    it('should return 500 и and error message', () => {
        const err = new Error('Test error');
        errorHandler(err, req, res, next);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: 'Internal Server Error' });
    });
});
