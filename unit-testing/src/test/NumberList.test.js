//highest level block 

describe('NumberList', () => {
    let listUnderTest = null;
    beforeEach(() => {
        listUnderTest = new dNumberList();
    })
    describe('after init', () => {
        it('should sum => 0', () => {
            //chai integrates expectations(assertions) like expect
            expect(listUnderTest.sumAll()).to.equal(0)
        })
        it('should produce product equal to null', () => {
            expect(listUnderTest.multiplyAll()).to.be.null;
        })
    })
    describe('adding new numbers', () => {
        it('4 + 6 should be 10', () => {
            listUnderTest.push(4);
            listUnderTest.push(6)
            expect(listUnderTest.sumAll().to.equal(10))
        })
    })
    describe('clearing list', () => {
        it('should sum to zero after adding 2 and clearing', () => {
            listUnderTest.push(2)
            listUnderTest.clear()
            expect(listUnderTest.sumAll()).to.equal(0)
        })
    })
})

//it or describe.skip skips a test 
//it or describe.only only runs that test