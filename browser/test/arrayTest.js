//importing asserting into non-opinionated mocha
var assert = chai.assert;

describe('Array', () => {
    it("should start empty", () => {
        var arr = []
        //actual result from test code, expected
        //assert is simpler but expect allows more flexibility
        assert.equal(arr.length, 0)
    })
})