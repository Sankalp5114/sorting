// const linearSearch = (arr, length, target) => {
//     let result = [];
//     let comparisonCount = 0; // To count the number of comparisons

//     for (let i = 0; i < length; i++) {
//         arr[i].style = "bar-search"; // Highlight the current element being checked
//         comparisonCount++; // Increment comparison count
//         result.push({ arr: JSON.parse(JSON.stringify(arr)), comparisonCount }); // Store array state and comparison count

//         if (arr[i].value === target) {
//             arr[i].style = "bar-found"; // Highlight the found element
//             result.push({ arr: JSON.parse(JSON.stringify(arr)), comparisonCount }); // Store found state
//             break;
//         } else {
//             arr[i].style = ""; // Reset the style if the target is not found
//         }
//     }

//     // Final result with found element or none
//     return { result, comparisonCount, found: arr.some(e => e.style === "bar-found") };
// };
// export default linearSearch;

export default function linearSearch(arr, length, target) {
    let result = [];
    let comparisonCount = 0;
  
    for (let i = 0; i < length; i++) {
      comparisonCount++;
      
      // Mark the current element being compared
      let newArr = arr.map((item, index) => {
        if (index === i) {
          return { ...item, style: 'comparing' };
        }
        return { ...item, style: 'default' };
      });
  
      // Add the current step to the result
      result.push({ arr: newArr, comparisonCount });
  
      if (arr[i].value === target) {
        // Mark the found element
        newArr[i].style = 'found';
        result.push({ arr: newArr, comparisonCount });
        break;
      }
    }
  
    return { result, comparisonCount };
  }
  
