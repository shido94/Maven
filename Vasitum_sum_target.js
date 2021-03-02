// Let the array is givenArray and number is 'k'
const givenArray = [1, 2, 3, 8, 4, 1, 2];
const total = 5;

/**
 * Return the first ans last index of array
 */
function getIndex(arr, total) {
    const result = {};

    for(let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            /**
             * If total is equal to the value of two index, return
             */
            if (arr[i] + arr[j] == total) {
                result.start = i;
                result.end = j;
                break;
            }
        }

        // Check if the object has found the indexes, then return
        if (result.hasOwnProperty('start')) {
            break;
        }
    }

    return result;
}

// Get the first and last index
const index = getIndex(givenArray, total)
console.log('index: ', index);