

export default function linearSearch(arr, length, target,setNotFound) {
    let result = [];
    let comparisonCount = 0;
    let i,x;
  
    for (i = 0; i < length; i++) {
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
        setNotFound(0);
        x=target;
        newArr[i].style = 'found';
        result.push({ arr: newArr, comparisonCount });
        break;
      }
    }
    if (x === target) {
      setNotFound(0);
    }
    else{
      setNotFound(1);
    }
    return { result, comparisonCount };
  }
  
