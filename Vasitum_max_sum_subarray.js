// Let the array is givenArray and number is 'k'
const givenArray = [1, 2, 3, 8, 4, 1, 2];
const k = 7;

/**
 * Calculate and return the total
 */
function findTheTotal(arr, index, k) {
    // Define the result
    const newArray = {
        sum : 0,
        values : []
    };

    for(let i = index; i < index + k; i++ ) {
        newArray.sum += arr[i];
        newArray.values.push(arr[i]);
    }

    return newArray;
}

function findSubArray(arr, k) {

    /**
     * Check if the number is greater than the array length,
     * Then we will throw the error
     */
    if (k > arr.length) {
        return new Error('Number should be less than the array size');
    }

    // Define the result
    const result = {
        sum : 0,
        values : []
    };

    /**
     * We will run the for loop to get the sub-array of size 'k'
     */
    for (let i = 0; i <= arr.length - k; i++) {
        const newArray = findTheTotal(arr, i, k);

        /**
         * If the sum of new array is greater then the previous array,
         * change the update the value of previous array
         */
        if (newArray.sum > result.sum) {
            result.values = newArray.values
            result.sum = newArray.sum;
        }
    }

    return result;
}

/**
 * We will pass the givenArray and the number 'k'
 */
const subArray = findSubArray(givenArray, k);

// Total Sum will be { subArray.sum }

// The Sub-Array is { subArray.values }

console.log('subArray: ', subArray);