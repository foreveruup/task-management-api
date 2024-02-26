const jwt = require('jsonwebtoken');
const { authenticateToken } = require('../../middleware/auth');
const User = require('../../models/User');

// mocking the entire jsonwebtoken module
jest.mock('jsonwebtoken');

describe('Middleware authenticateToken', () => {
    it('should put req.user, if token is valid', async () => {
        const user = { id: 'dummyUserId' };
        const req = {
            headers: {
                authorization: 'Bearer valid-token'
            }
        };
        const res = {};
        const next = jest.fn();

        User.findById = jest.fn().mockResolvedValue(user);

        jwt.verify.mockImplementationOnce((token, secret, callback) => {
            callback(null, user);
        });

        await authenticateToken(req, res, next);

        expect(req.user).toEqual(user);
        expect(next).toHaveBeenCalled();
    });
});
