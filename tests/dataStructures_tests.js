let assert = require('assert');

// Classes
let Stack = require('../src/dataStructures/Stack').Stack;
let Queue = require('../src/dataStructures/Queue').Queue;
let LList = require('../src/dataStructures/Llist').LList;

// Sorting test
describe('DataStructures', () => {
            
    describe('Stack', () => {

        it('create', () => {
            let myStack = new Stack(10);

            let num = 0;
            while (!myStack.empty()) {
                if (myStack.pop() != 'undefined') num++;
            }

            assert.equal(
                num,
                10
            );
        });
        
        it('push', () => {
            let myStack = new Stack(10);
            
            myStack.push(999);

            assert.equal(
                myStack.size(), 
                11
            );
        });

        it('pop', () => {
            let myStack = new Stack(10);
            
            myStack.pop();

            assert.equal(
                myStack.size(), 
                9
            );
        });

    });

    describe('Queue', () => {

        it('create', () => {
            let myQueue = new Queue(10);

            let num = 0;
            while (!myQueue.empty()) {
                if (myQueue.dequeue() != 'undefined') num++;
            }

            assert.equal(
                num,
                10
            );
        });
        
        it('enqueue', () => {
            let myQueue = new Queue(10);
            
            myQueue.enqueue(999);

            assert.equal(
                myQueue.size(), 
                11
            );
        });

        it('dequeue', () => {
            let myQueue = new Queue(10);
            
            myQueue.dequeue();

            assert.equal(
                myQueue.size(), 
                9
            );
        });

    });

    describe('LList', () => {

        it('create', () => {
            let myList = new LList(3, 1, 2, 3);

            assert.equal(
                myList.toString(),
                "1 2 3"
            )
        });

        it('insert (to end)', () => {
            let myList = new LList(3, 1, 2, 3);

            myList.insert(32);

            assert.equal(
                myList.toString(),
                "1 2 3 32"
            )
        });

        it('insert (after elem)', () => {
            let myList = new LList(3, 1, 2, 3);

            myList.insert(32, 1);

            assert.equal(
                myList.toString(),
                "1 32 2 3"
            )
        });

        it('remove (LList has elem)', () => {
            let myLList = new LList(10, 1, 5, 9, 10, 12, 123, 1233, 43, 1, 4);

            myLList.remove(1233);

            assert.equal(
               myLList.toString(),
               "1 5 9 10 12 123 43 1 4"
            );
        });

        it('remove (LList doesn\'t have elem)', () => {
            let myLList = new LList(10, 1, 5, 9, 10, 12, 123, 1233, 43, 1, 4);

            myLList.remove(99);

            assert.equal(
               myLList.toString(),
               "1 5 9 10 12 123 1233 43 1 4"
            );
        });

    });

});