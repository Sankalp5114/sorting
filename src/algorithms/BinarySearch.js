
  export default function binarySearch(arr, target,setNotFound) {
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
            setNotFound(0);
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
    setNotFound(1);
    return { result: steps, comparisonCount };
}
