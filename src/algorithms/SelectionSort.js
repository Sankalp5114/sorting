// const selectionSort=(arr,length)=>{
//     var results=[];
//     for(let i=0;i<length;i++){
//         let max=i;
//         arr[i].style="bar-swap";
//         for(let j=i+1;j<length;j++){
            
//             if(arr[j].value<arr[max].value){
//                 arr[max].style="bar";
//                 max=j;
//             }
//             arr[j].style="bar-swap";
//             arr[max].style="bar-min";
//             results.push(JSON.parse(JSON.stringify(arr)));
//             arr[j].style="bar";
//             // arr[max].style="bar-min"
//             if(j==arr.length){
                
//             }
//         }
//         arr[i].style="bar";        
//         [arr[i],arr[max]]=[arr[max],arr[i]];
//         arr[i].style="bar-sorted";
//         results.push(JSON.parse(JSON.stringify(arr)));
        
//     };
//     results.push(JSON.parse(JSON.stringify(arr)));
//     return results;
// }
// export default selectionSort;

const selectionSort = (arr, length) => {
    var result = [];
    let swapCount = 0; // To count the number of swaps
    let passCount = 0; // To count the number of passes

    for (let i = 0; i < length - 1; i++) {
        let minIndex = i; // Assume the minimum is the current element
        passCount++; // Increment pass count for each iteration
        arr[i].style = "bar-swap"; // Highlight the current element

        // Loop to find the minimum element in the remaining unsorted portion
        for (let j = i + 1; j < length; j++) {
            arr[j].style = "bar-swap"; // Highlight the element being compared

            if (arr[j].value < arr[minIndex].value) {
                arr[minIndex].style = ""; // Reset the previous minIndex style
                minIndex = j; // Update minIndex
            }

            // Visualize the current state
            arr[minIndex].style = "bar-min"; // Highlight the minimum value in the pass
            result.push({ arr: JSON.parse(JSON.stringify(arr)), swapCount, passCount });

            // Reset styles after each comparison
            arr[j].style = "";
        }

        // Swap the found minimum with the current element
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Perform the swap
            swapCount++; // Increment swap count whenever a swap occurs
        }

        arr[i].style = "bar-sorted"; // Mark the current element as sorted
        result.push({ arr: JSON.parse(JSON.stringify(arr)), swapCount, passCount }); // Store state after the swap
    }

    // Mark the last element as sorted
    arr[length - 1].style = "bar-sorted";
    result.push({ arr: JSON.parse(JSON.stringify(arr)), swapCount, passCount }); // Final state

    // Return the sorted array and the swap/pass counts
    return { result, swapCount, passCount };
};

export default selectionSort;
