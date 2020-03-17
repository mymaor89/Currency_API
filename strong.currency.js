
function merge(leftArr, rightArr) {
        var sortedArr = [];
        while (leftArr.length && rightArr.length) {
        if (leftArr[0][1] <= rightArr[0][1]) {
        sortedArr.push(leftArr[0]);
        leftArr = leftArr.slice(1)
        } else {
                sortedArr.push(rightArr[0]);
        rightArr = rightArr.slice(1)
        }
        }
        while (leftArr.length)
        sortedArr.push(leftArr.shift());
        while (rightArr.length)
        sortedArr.push(rightArr.shift());
        return sortedArr;
}

function mergesort(arr) {
        if (arr.length < 2) {
                return arr; }
                else {
                        var midpoint = parseInt(arr.length / 2);
                        var leftArr   = arr.slice(0, midpoint);
                        var rightArr  = arr.slice(midpoint, arr.length);
                        return merge(mergesort(leftArr), mergesort(rightArr));
                }
      }

function sort(arr_input){
        var arr = [];
        for (var rate in arr_input) {
                arr.push([rate, arr_input[rate]]);
        }

        return mergesort(arr);
}

// input - dict of rates
// output - sorted array by the strongest currency
function strongCorrency(arr_input){
        var sorted_currency = sort(arr_input);
        var strong_arr = [];
        for(var index in sorted_currency) {
                strong_arr.push(sorted_currency[index][0]);
        }
        return strong_arr;
}

module.exports = strongCorrency;