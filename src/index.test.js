import _ from 'lodash'
import {expect} from 'chai'

const myArray = ['Hello', 'World,', 'how', 'are', 'you']


describe('Node module', () => {
    it('myArray exists', (done) => {
        expect(myArray).to.exist
        done()
    })
})