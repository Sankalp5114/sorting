// const insertionSort = (arr, length) => {
//     var result = [];
//     for (let i = 1; i < length; i++) {
//         let key = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j].value > key.value) {
//             arr[j + 1] = arr[j];
//             arr[j].style = "bar-swap";
//             result.push(JSON.parse(JSON.stringify(arr)));
//             j--;
//         }
//         arr[j + 1] = key;
//         arr[j + 1].style = "bar-sorted";
//         result.push(JSON.parse(JSON.stringify(arr)));
//     }
//     arr.forEach(element => element.style = "bar-sorted");
//     result.push(JSON.parse(JSON.stringify(arr)));
//     return result;
// };

// export default insertionSort;
const insertionSort = (arr, length) => {
    let result = [];

    for (let i = 1; i < length; i++) {
        let key = arr[i];
        let j = i - 1;

        // Highlight the current element (key) being inserted
        arr[i].style = "bar-swap";
        result.push(JSON.parse(JSON.stringify(arr)));

        // Move elements that are greater than key to one position ahead
        while (j >= 0 && arr[j].value > key.value) {
            arr[j + 1] = arr[j]; // Shift element to the right
            arr[j].style = "bar-swap"; // Highlight the element being compared
            j--;
        }

        // Place the key in its correct position
        arr[j + 1] = key;
        arr[j + 1].style = "bar-sorted"; // Mark the element as sorted
        result.push(JSON.parse(JSON.stringify(arr))); // Capture current state

        // Reset styles for unsorted elements
        arr.forEach((bar, index) => {
            if (index > i) bar.style = "bar"; // Reset unsorted elements
        });
    }

    // After sorting, mark all elements as sorted
    arr.forEach(element => element.style = "bar-sorted");
    result.push(JSON.parse(JSON.stringify(arr))); // Capture final sorted array

    return result;
};

export default insertionSort;
