const request = require ("supertest")
const app = require( "./server")

describe('rest my app server', () => {
    it('should get main route', async() =>{
        const res = await request(app)
            .get('/users')
            expect(res.body).toHaveProperty('message')
            
            //npm test
            })
    })