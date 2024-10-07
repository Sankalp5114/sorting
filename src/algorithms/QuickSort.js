// const quickSort=(arr,length)=>{
//     var result=[]
//     sort(arr,0,length-1,result);
//     arr.forEach(element => {
//         element.style="bar-sorted";
//     });
//     result.push(JSON.parse(JSON.stringify(arr)));
//     return result;
// }
// function sort(arr,l,h,result){
//     if(l<h){
//         var pi=partition(arr,l,h,result);
//         sort(arr,l,pi-1,result);
//         sort(arr,pi+1,h,result);
//     }
// }
// function partition(arr,l,h,result){
//     let pivot=arr[h];
//     arr[h].style="bar-min";
//     result.push(JSON.parse(JSON.stringify(arr)));
//     var i=l-1;
//     for(let j=l;j<h;j++){
//         arr[j].style="bar-swap";
//         result.push(JSON.parse(JSON.stringify(arr)));
//         if(arr[j].value<pivot.value){
//             i++;
//             [arr[i],arr[j]]=[arr[j],arr[i]];
//         }
        
//     }
//     arr[h].style=null;
//     result.push(JSON.parse(JSON.stringify(arr)));
//     [arr[i+1],arr[h]]=[arr[h],arr[i+1]];
    
//     return i+1;
// }
// export default quickSort;


// const quickSort = (arr, length) => {
//     let result = [];
//     let swapCount = 0;
//     let passCount = 0;
//     sort(arr, 0, length - 1, result, () => {
//         passCount++;
//     }, () => {
//         swapCount++;
//     });
    
//     // Add the final sorted array to results
//     result.push(JSON.parse(JSON.stringify(arr)));
//     return { result, swapCount, passCount };
// }

// function sort(arr, l, h, result, onPass, onSwap) {
//     if (l < h) {
//         let pi = partition(arr, l, h, result, onSwap);
//         onPass(); // Increment pass count
//         sort(arr, l, pi - 1, result, onPass, onSwap);
//         sort(arr, pi + 1, h, result, onPass, onSwap);
//     }
// }

// function partition(arr, l, h, result, onSwap) {
//     let pivot = arr[h];
//     arr[h].style = "bar-min";
//     result.push(JSON.parse(JSON.stringify(arr)));
//     let i = l - 1;
//     for (let j = l; j < h; j++) {
//         arr[j].style = "bar-swap";
//         result.push(JSON.parse(JSON.stringify(arr)));
//         if (arr[j].value < pivot.value) {
//             i++;
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//             onSwap(); // Increment swap count on swap
//         }
//     }
//     arr[h].style = null;
//     arr.forEach(element => element.style = "bar-sorted");
//     result.push(JSON.parse(JSON.stringify(arr)));
//     [arr[i + 1], arr[h]] = [arr[h], arr[i + 1]];
    
//     return i + 1;
// }

// export default quickSort;


const quickSort = (arr, length) => {
    var result = [];
    let swapCount = 0; // To count the number of swaps
    let passCount = 0; // To count the number of passes

    // Helper function to perform quicksort
    const sort = (arr, low, high) => {
        if (low < high) {
            passCount++; // Increment pass count for each recursive call
            let pi = partition(arr, low, high); // Partition the array

            // Recursively sort the elements
            sort(arr, low, pi - 1);
            sort(arr, pi + 1, high);
        }
    };

    // Helper function to partition the array
    const partition = (arr, low, high) => {
        let pivot = arr[high];
        arr[high].style = "bar-min"; // Mark pivot element
        result.push({ arr: JSON.parse(JSON.stringify(arr)), swapCount, passCount }); // Store state

        let i = low - 1; // Index of smaller element

        for (let j = low; j < high; j++) {
            arr[j].style = "bar-swap"; // Mark elements being compared
            result.push({ arr: JSON.parse(JSON.stringify(arr)), swapCount, passCount });

            if (arr[j].value < pivot.value) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
                swapCount++; // Increment swap count
                result.push({ arr: JSON.parse(JSON.stringify(arr)), swapCount, passCount }); // Store state after swap
            }

            // Reset styles after comparison
            arr[j].style = "";
        }

        // Swap the pivot element to its correct position
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        swapCount++; // Increment swap count for this swap
        arr[high].style = ""; // Reset pivot style

        result.push({ arr: JSON.parse(JSON.stringify(arr)), swapCount, passCount }); // Store state after final swap
        return i + 1; // Return the partition index
    };

    // Call the quicksort helper function
    sort(arr, 0, length - 1);

    // Mark all elements as sorted at the end
    arr.forEach(element => element.style = "bar-sorted");
    result.push({ arr: JSON.parse(JSON.stringify(arr)), swapCount, passCount }); // Final state

    // Return the sorted array and the swap/pass counts
    return { result, swapCount, passCount };
};

export default quickSort;
