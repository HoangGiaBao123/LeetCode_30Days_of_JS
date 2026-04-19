/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(initNum) {
    let currentNum = initNum
    return {
        increment: function() {
            currentNum = currentNum + 1
            return currentNum
        },
        decrement: function() {
            currentNum = currentNum - 1
            return currentNum
        },
        reset: function() {
            currentNum = initNum
            return currentNum
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
