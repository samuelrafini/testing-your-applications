const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

it('should return hello world responese', (done) =>{
    request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
           expect(res.body).toInclude({
               error: 'Page not found.'
           });
        })
        .end(done);
});

//make a new test
//assert 200
//assert that you exist in users array
it('should return my user object', (done) => {
    request(app)
    .get('/users')
    .expect(200)
    .expect((res) =>{
        expect(res.body).toInclude({
            name: 'Sam',
            age: 25
        });
    })
    .end(done);
})