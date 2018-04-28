//assertion library to verify correctness. 
//assert is built in node.js module
var assert = require('assert');

//describe is a way to group tests. describe('Name of test group'
// callback function as args

describe('Array', function () {
    describe('#indexOf()', function () {
        //it is an individual test case
        it('should return -1 when the value is not present', function () {
            //equal's args are (actual, expect);, uses == to test equality
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});

describe('Math', () => {
    it('3*3 should be 9', () => {
        assert.equal(9, 3 * 3)
    })
    it('math should be -8', () => {
        assert.equal(-8, (3 - 4) * 8)
    })
})