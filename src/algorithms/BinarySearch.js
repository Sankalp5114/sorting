// const binarySearch = (arr, target) => {
//     let result = [];
//     let comparisonCount = 0; // To count comparisons
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
        
//         arr[mid].style = "bar-search"; // Highlight mid element being checked
//         comparisonCount++; // Increment comparison count
//         result.push({ arr: JSON.parse(JSON.stringify(arr)), comparisonCount }); // Store array state and comparison count

//         if (arr[mid].value === target) {
//             arr[mid].style = "bar-found"; // Highlight the found element
//             result.push({ arr: JSON.parse(JSON.stringify(arr)), comparisonCount }); // Store found state
//             break;
//         } else if (arr[mid].value < target) {
//             left = mid + 1; // Discard the left half
//         } else {
//             right = mid - 1; // Discard the right half
//         }

//         // Reset mid style after each check
//         arr[mid].style = "";
//     }

//     // Final state if the element is not found
//     return { result, comparisonCount, found: arr.some(e => e.style === "bar-found") };
// };
// export default binarySearch;
// export default function binarySearch(arr, target) {
//   console.log("Inside binarySearch - Input arr:", arr);
//   console.log("Inside binarySearch - Target:", target);

//   if (!Array.isArray(arr)) {
//       console.error("Input is not an array", arr);
//       return { steps: [], comparisonCount: 0 };
//   }

//   let steps = [];
//   let comparisonCount = 0;
//   let low = 0;
//   let high = arr.length - 1;

//   console.log("Initial State - Low:", low, "High:", high);

//   while (low <= high) {
//       comparisonCount++;
//       const mid = Math.floor((low + high) / 2);

//       if (mid < 0 || mid >= arr.length) {
//           console.error("Mid index out of bounds", mid);
//           break;
//       }

//       console.log(`Comparing: arr[${mid}]:`, arr[mid]);

//       let newArr = arr.map((item, index) => {
//           if (index === mid) {
//               return { ...item, style: 'comparing' };
//           }
//           return { ...item, style: 'default' };
//       });

//       steps.push({ arr: newArr, comparisonCount, low, mid, high });

//       if (arr[mid].value === target) {
//           newArr[mid].style = 'found';
//           steps.push({ arr: newArr, comparisonCount, low, mid, high });
//           break;
//       } else if (arr[mid].value < target) {
//           low = mid + 1;
//       } else {
//           high = mid - 1;
//       }

//       console.log("Updated State - Low:", low, "High:", high);
//   }

//   return { steps, comparisonCount };
// }


  
  // export default function binarySearch(arr, target) {
  //   let low = 0;
  //   let high = arr.length - 1;
  //   let steps = [];
  //   let comparisonCount = 0;
  
  //   while (low <= high) {
  //     let mid = Math.floor((low + high) / 2);
  //     let comparisonResult = '';
  //     comparisonCount++;
  
  //     // Push the current state of low, mid, high, and comparison
  //     if (arr[mid].value < target) {
  //       comparisonResult = `mid (${arr[mid].value}) < target (${target})`;
  //       steps.push({
  //         arr: [...arr], 
  //         low, mid, high, 
  //         comparisonResult,
  //         comparisonCount
  //       });
  //       low = mid + 1;
  //     } else if (arr[mid].value > target) {
  //       comparisonResult = `mid (${arr[mid].value}) > target (${target})`;
  //       steps.push({
  //         arr: [...arr], 
  //         low, mid, high, 
  //         comparisonResult,
  //         comparisonCount
  //       });
  //       high = mid - 1;
  //     } else {
  //       comparisonResult = `mid (${arr[mid].value}) == target (${target})`;
  //       steps.push({
  //         arr: [...arr], 
  //         low, mid, high, 
  //         comparisonResult,
  //         comparisonCount
  //       });
  //       break;
  //     }
  //   }
  
  //   return { result: steps, comparisonCount };
  // }
  export default function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let steps = [];
    let comparisonCount = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let comparisonResult = '';
        comparisonCount++;

        // Create a copy of the array with styles for visualization
        let newArr = arr.map((item, index) => {
            if (index === mid) {
                return { ...item, style: 'comparing' }; // Highlight the mid index
            }
            return { ...item, style: 'default' }; // Default style for other elements
        });

        // Log the comparison results
        if (arr[mid].value < target) {
            comparisonResult = `mid (${arr[mid].value}) < target (${target})`;
            steps.push({
                arr: newArr, 
                low: low, // Low index
                mid: mid, // Mid index
                high: high, // High index
                comparisonResult,
                comparisonCount
            });
            low = mid + 1;
        } else if (arr[mid].value > target) {
            comparisonResult = `mid (${arr[mid].value}) > target (${target})`;
            steps.push({
                arr: newArr, 
                low: low, // Low index
                mid: mid, // Mid index
                high: high, // High index
                comparisonResult,
                comparisonCount
            });
            high = mid - 1;
        } else {
            comparisonResult = `mid (${arr[mid].value}) == target (${target})`;
            // Highlight the found element
            newArr[mid].style = 'found'; 
            steps.push({
                arr: newArr, 
                low: low, // Low index
                mid: mid, // Mid index
                high: high, // High index
                comparisonResult,
                comparisonCount
            });
            return { result: steps, comparisonCount }; // Return early if found
        }
    }

    // If we exit the while loop without finding the target
    steps.push({
        arr: arr.map(item => ({ ...item, style: 'default' })), // Default style for all elements
        low: low,
        mid: null,
        high: high,
        comparisonResult: `Element ${target} not found`,
        comparisonCount
    });

    return { result: steps, comparisonCount };
}
