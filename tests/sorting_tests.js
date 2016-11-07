let assert = require('assert');

// Classes
let List = require('../src/dataStructures/List').List;

// Sorting test
describe('Sort', () => {
            
    describe('List', () => {
        
        it('Bubble Sort', () => {
            let myList = new List(100);
            let arrayCopySorted = myList.dataStore.slice(0).sort((a, b) => a - b);
            
            myList.bubbleSort();

            assert.equal(
                myList.toString(), 
                arrayCopySorted.toString()
            );
        });

        it('Selection Sort', () => {
            let myList = new List(100);
            let arrayCopySorted = myList.dataStore.slice(0).sort((a, b) => a - b);
            myList.selectionSort();

            assert.equal(
                myList.toString(), 
                arrayCopySorted.toString()
            );
        });

        it('Insertion Sort', () => {
            let myList = new List(100);
            let arrayCopySorted = myList.dataStore.slice(0).sort((a, b) => a - b);
            myList.insertionSort();

            assert.equal(
                myList.toString(), 
                arrayCopySorted.toString()
            );
        });
        
    });

});