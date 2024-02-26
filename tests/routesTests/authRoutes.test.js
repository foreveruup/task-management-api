const request = require('supertest');
const app = require('../../app');

describe('Auth routes', () => {
    it('should login a user', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({
                username: 'testuser',
                password: 'testpassword'
            });

        expect(response.status).toBe(200);
        expect(response.body.accessToken).toBeDefined();
    });
});
