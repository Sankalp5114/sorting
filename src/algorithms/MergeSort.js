// const mergeSort=(arr,length)=>{
//     // console.log(arr);
//     var result=[]
//     sort(arr,0,length-1,result);
//     arr.forEach(element => {
//         element.style="bar-sorted";
//     });
//     result.push(JSON.parse(JSON.stringify(arr)));
//     return result;
//     // console.log(result);
// }
// function sort(arr,l,r,result){
//     if(l<r){
//     let m=Math.floor( l+(r-l)/2);
//     sort(arr,l,m,result);
//     sort(arr,m+1,r,result);
//     merge(arr,l,m,r,result);
//     result.push(JSON.parse(JSON.stringify(arr)));
//     }
// }
// function merge(arr,l,m,r,result){
//     let temp_left=[];
//     let temp_right=[];
    
//     for(let i=l;i<=m;i++){
//         // console.log(JSON.parse(JSON.stringify(arr[i])));
//         temp_left.push(JSON.parse(JSON.stringify(arr[i])));
//     }
//     for(let i=m+1;i<=r;i++){
//         temp_right.push(JSON.parse(JSON.stringify(arr[i])));
//     }
    
//     var i=0,j=0,k=l;
//     var n1=m-l+1;
//     var n2=r-m;
//     while(i<n1&&j<n2){
//         if(temp_left[i].value<=temp_right[j].value){
//             arr[k]=temp_left[i];
//             arr[k].style="bar-swap";
//             // result.push(JSON.parse(JSON.stringify(arr)));
//             i++;
//             k++;
//         }
//         else{
//             arr[k]=temp_right[j];
//             arr[k].style="bar-swap";
//             // result.push(JSON.parse(JSON.stringify(arr)));
//             j++;
//             k++;
//         }
//     }
//     while(i<n1){
//         arr[k]=temp_left[i];
//         arr[k].style="bar-swap";
//         // result.push(JSON.parse(JSON.stringify(arr)));
//         k++;
//         i++;
//     }
//     while(j<n2){
//         arr[k]=temp_right[j];
//         arr[k].style="bar-swap";
//         // result.push(JSON.parse(JSON.stringify(arr)));
//         k++;
//         j++;
//     }
    
// }
// export default mergeSort;


const mergeSort = (arr, length) => {
    var result = [];
    let swapCount = 0; // To count the number of swaps
    let passCount = 0; // To count the number of passes

    // Helper function to perform merge sort
    const sort = (arr, l, r) => {
        if (l < r) {
            passCount++; // Increment pass count for each recursive division
            let m = Math.floor(l + (r - l) / 2);

            // Recursively sort the left and right halves
            sort(arr, l, m);
            sort(arr, m + 1, r);
            
            // Merge the sorted halves
            merge(arr, l, m, r);
            result.push({ arr: JSON.parse(JSON.stringify(arr)), swapCount, passCount }); // Store state after each merge
        }
    };

    // Helper function to merge the divided arrays
    const merge = (arr, l, m, r) => {
        let temp_left = [], temp_right = [];

        // Copy data to temp arrays temp_left[] and temp_right[]
        for (let i = l; i <= m; i++) {
            temp_left.push(JSON.parse(JSON.stringify(arr[i])));
        }
        for (let i = m + 1; i <= r; i++) {
            temp_right.push(JSON.parse(JSON.stringify(arr[i])));
        }

        let i = 0, j = 0, k = l;
        let n1 = m - l + 1;
        let n2 = r - m;

        // Merge the temp arrays back into arr[]
        while (i < n1 && j < n2) {
            if (temp_left[i].value <= temp_right[j].value) {
                arr[k] = temp_left[i];
                arr[k].style = "bar-swap"; // Mark the bar as swapped
                result.push({ arr: JSON.parse(JSON.stringify(arr)), swapCount, passCount }); // Store state after each comparison
                i++;
            } else {
                arr[k] = temp_right[j];
                swapCount++; // Increment swap count when an element from temp_right moves before temp_left
                arr[k].style = "bar-swap"; // Mark the bar as swapped
                result.push({ arr: JSON.parse(JSON.stringify(arr)), swapCount, passCount }); // Store state after each comparison
                j++;
            }
            k++;
        }

        // Copy the remaining elements of temp_left[], if any
        while (i < n1) {
            arr[k] = temp_left[i];
            arr[k].style = "bar-swap";
            result.push({ arr: JSON.parse(JSON.stringify(arr)), swapCount, passCount });
            i++;
            k++;
        }

        // Copy the remaining elements of temp_right[], if any
        while (j < n2) {
            arr[k] = temp_right[j];
            arr[k].style = "bar-swap";
            result.push({ arr: JSON.parse(JSON.stringify(arr)), swapCount, passCount });
            j++;
            k++;
        }
    };

    // Call the merge sort function
    sort(arr, 0, length - 1);

    // Mark all elements as sorted at the end
    arr.forEach(element => element.style = "bar-sorted");
    result.push({ arr: JSON.parse(JSON.stringify(arr)), swapCount, passCount }); // Final state

    // Return the sorted array and the swap/pass counts
    return { result, swapCount, passCount };
};

console.log('mergeSort is loaded!');
export default mergeSort;