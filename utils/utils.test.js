const expect =require('expect');
const utils = require('./utils');

describe('utils', () => {

    describe('#add'), () => {
        it('should add two numbers', () => {
            var res = utils.add(33,11);
    
         expect(res).toBe(44).toBeA('number');
         // if (res !== 44){
         // throw new Error(`Expected 44, but got ${res}`);
         // }
     });
    }
    
    it('should async add two numbers', (done) =>{
        utils.asyncAdd(4,3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
    
    
    it('should square a number', () =>{
        var res = utils.square(4);
    
        expect(res).toBe(16).toBeA('number');
        // if(res !== 16){
        // throw new Error(`Expected 16, but got ${res}`);
        // }
    });
    
    it('should async square a number', (done) =>{
        utils.asyncSquare(4,(square) => {
            expect(square).toBe(16).toBeA('number');
            done();
        });
    });
})



it('should expect some values', () => {
    // expect(12).toNotBe(12);
    // expect({name: 'Samuel'}).toEqual({name: 'Samuel'})
    // expect([2,3,4]).toInclude(2);
    // expect([2,3,4]).toExclude(5);
    // expect({
    //     name: 'Samuel',
    //     age: 25,
    //     location: 'Den Haag'
    // }).toInclude({
    //     age: 25
    // })
    // expect({
    //     name: 'Samuel',
    //     age: 25,
    //     location: 'Den Haag'
    // }).toExclude({
    //     age: 26
    // })

});

it('should include firstName and lastName with proper values', () =>{
    var user = {location: 'Philadelphia', age:25};
    var res = utils.setName(user, 'Samuel Rafini');

    // expect(user).toEqual(res);
//--------------code BELOW IS WRONG
    // expect(res.firstName).toInclude(Samuel);
    // expect(res.lastName).toInclude(Rafini);

    expect(res).toInclude({
        firstName: 'Samuel',
        lastName: 'Rafini'
    })
    
});

