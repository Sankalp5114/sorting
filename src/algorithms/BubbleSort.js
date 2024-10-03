// const bubbleSort = (arr, length) => {
//     var result = [];
//     for (let i = 0; i < length - 1; i++) {
//         for (let j = 0; j < length - i - 1; j++) {
//             arr[j].style = "bar-swap";
//             arr[j + 1].style = "bar-swap";
//             result.push(JSON.parse(JSON.stringify(arr)));

//             if (arr[j].value > arr[j + 1].value) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//         arr[length - i - 1].style = "bar-sorted";
//         result.push(JSON.parse(JSON.stringify(arr)));
//     }
//     arr.forEach(element => element.style = "bar-sorted");
//     result.push(JSON.parse(JSON.stringify(arr)));
//     return result;
// };

// export default bubbleSort;
const bubbleSort = (arr, length) => {
    var result = [];
    let swapCount = 0; // To count the number of swaps
    let passCount = 0; // To count the number of passes

    for (let i = 0; i < length - 1; i++) {
        let swapped = false; // Flag to check if a swap happened in the current pass
        passCount++; // Increment pass count for each iteration

        for (let j = 0; j < length - i - 1; j++) {
            arr[j].style = "bar-swap";
            arr[j + 1].style = "bar-swap";
            result.push({ arr: JSON.parse(JSON.stringify(arr)), swapCount, passCount }); // Store swap and pass counts along with the array state

            if (arr[j].value > arr[j + 1].value) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Perform the swap
                swapCount++; // Increment swap count whenever a swap occurs
                swapped = true; // A swap happened
            }

            // Reset styles after comparison
            arr[j].style = "";
            arr[j + 1].style = "";
        }

        arr[length - i - 1].style = "bar-sorted"; // Mark the last element as sorted
        result.push({ arr: JSON.parse(JSON.stringify(arr)), swapCount, passCount }); // Store after marking sorted

        // If no swaps were made during this pass, the array is already sorted
        if (!swapped) break;
    }

    // Mark all elements as sorted at the end
    arr.forEach(element => element.style = "bar-sorted");
    result.push({ arr: JSON.parse(JSON.stringify(arr)), swapCount, passCount }); // Final state

    // Return the sorted array and the swap/pass counts
    return { result, swapCount, passCount };
};
export default bubbleSort;
