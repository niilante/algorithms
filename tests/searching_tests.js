let assert = require('assert');

// Classes
let List = require('../src/dataStructures/List').List;

// Sorting test
describe('Search', () => {
            
    describe('List', () => {
        
        it('Binary Search', () => {
            let myList = new List(10);
            myList.quickSort();

            assert.equal(
                myList.binarySearch(myList.getElement(5)), 
                5
            );

            assert.equal(
                myList.binarySearch(9999), 
                -1
            );

        });

    });

});