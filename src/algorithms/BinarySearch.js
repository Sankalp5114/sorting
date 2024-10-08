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

export default function binarySearch(arr, target) {
    let result = [];
    let comparisonCount = 0;
  
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      comparisonCount++;
      const mid = Math.floor((left + right) / 2);
  
      let newArr = arr.map((item, index) => {
        if (index === mid) {
          return { ...item, style: 'comparing' };
        }
        return { ...item, style: 'default' };
      });
  
      // Add the current step to the result
      result.push({ arr: newArr, comparisonCount });
  
      if (arr[mid].value === target) {
        // Mark the found element
        newArr[mid].style = 'found';
        result.push({ arr: newArr, comparisonCount });
        break;
      } else if (arr[mid].value < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return { result, comparisonCount };
  }
  
