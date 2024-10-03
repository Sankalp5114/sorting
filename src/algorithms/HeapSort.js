// const heapSort = (arr, length) => {
//     var result = [];
//     function heapify(arr, n, i) {
//         let largest = i;
//         let left = 2 * i + 1;
//         let right = 2 * i + 2;

//         if (left < n && arr[left].value > arr[largest].value) {
//             largest = left;
//         }

//         if (right < n && arr[right].value > arr[largest].value) {
//             largest = right;
//         }

//         if (largest !== i) {
//             [arr[i], arr[largest]] = [arr[largest], arr[i]];
//             arr[i].style = "bar-swap";
//             arr[largest].style = "bar-swap";
//             result.push(JSON.parse(JSON.stringify(arr)));
//             heapify(arr, n, largest);
//         }
//     }

//     for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
//         heapify(arr, length, i);
//     }

//     for (let i = length - 1; i > 0; i--) {
//         [arr[0], arr[i]] = [arr[i], arr[0]];
//         arr[0].style = "bar-swap";
//         arr[i].style = "bar-sorted";
//         result.push(JSON.parse(JSON.stringify(arr)));
//         heapify(arr, i, 0);
//     }

//     arr.forEach(element => element.style = "bar-sorted");
//     result.push(JSON.parse(JSON.stringify(arr)));
//     return result;
// };

// export default heapSort;
const heapSort = (arr, length) => {
    var result = [];
    let swapCount = 0; // To count the number of swaps
    let passCount = 0; // To count the number of passes

    // Helper function to heapify the array
    function heapify(arr, n, i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        // Check if left child exists and is greater than root
        if (left < n && arr[left].value > arr[largest].value) {
            largest = left;
        }

        // Check if right child exists and is greater than largest so far
        if (right < n && arr[right].value > arr[largest].value) {
            largest = right;
        }

        // If largest is not root
        if (largest !== i) {
            // Swap elements
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            swapCount++; // Increment swap count
            arr[i].style = "bar-swap";
            arr[largest].style = "bar-swap";

            // Store the state after the swap
            result.push({ arr: JSON.parse(JSON.stringify(arr)), swapCount, passCount });

            // Recursively heapify the affected subtree
            heapify(arr, n, largest);
        }
    }

    // Build the max heap
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        passCount++; // Increment pass count for each heapify call
        heapify(arr, length, i);
    }

    // One by one extract elements from the heap
    for (let i = length - 1; i > 0; i--) {
        passCount++; // Increment pass count for each extraction
        // Swap the root of the heap with the last element
        [arr[0], arr[i]] = [arr[i], arr[0]];
        swapCount++; // Increment swap count for the extraction
        arr[0].style = "bar-swap";
        arr[i].style = "bar-sorted";

        // Store the state after the swap
        result.push({ arr: JSON.parse(JSON.stringify(arr)), swapCount, passCount });

        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }

    // Mark all elements as sorted
    arr.forEach(element => element.style = "bar-sorted");
    result.push({ arr: JSON.parse(JSON.stringify(arr)), swapCount, passCount }); // Final state

    // Return the sorted array and the swap/pass counts
    return { result, swapCount, passCount };
};

export default heapSort;
