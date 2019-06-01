const request = require('supertest');
const app = require('../src/app');

const users =  {
  "users": [
    {'name': 'Mark👦',}   ,  {'name': 'Maria👩',}   ,  {'name': 'Jason👦',},
    {'name': 'Sofia👩',}  ,  {'name': 'Michael👦'}  ,  {'name': 'Carlos👦'}
  ]
}


describe('GET /api/v1' , () =>{
  it('responds with a json message', function(done){
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: '👑 Welcome To API Main End Point 👑'
      }, done);
  });
})

describe('GET /api/v1/users', () => {
  it('responds with a json message', function(done) {
    request(app)
      .get('/api/v1/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, users, done);
  });
});