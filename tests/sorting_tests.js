let assert = require('assert');

// Classes
let List = require('../src/dataStructures/List').List;

// Sorting test
describe('Sort', () => {
    let myList = new List(20);
    let arrayCopy = myList.dataStore.slice(0);
    let arrayCopySorted = arrayCopy.slice(0).sort((a, b) => a - b);
            
    describe('List', () => {
        
        it('Bubble Sort', () => {
            myList.bubbleSort();

            assert.equal(
                myList.toString(), 
                arrayCopySorted.toString()
            );
        });
        
    });

});