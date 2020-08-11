let expect = require('chai').expect;
let id = require('../components/user/Identification');

// A demonstration unit test - not intending to display complete coverage
describe('User identification', function() {
    context('generate user identifier', function() {
        it('generate the correct md5sum', ()=>{
            const identifier = new id.Identification("test").getIdentifier();
            expect(identifier).to.equal("098f6bcd4621d373cade4e832627b4f6");
        });
        it('generate the a different md5sum to the previous md5sum', ()=>{
            const identifier = new id.Identification("test2").getIdentifier();
            expect(identifier).to.not.equal("098f6bcd4621d373cade4e832627b4f6");
        });
        it('to be okay with non strings', ()=>{
            const getId = ()=> {return new id.Identification({}).getIdentifier()};
            expect(getId).to.not.throw();
        });
    });
});
