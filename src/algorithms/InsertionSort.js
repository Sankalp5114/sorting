const insertionSort = (arr, length) => {
    var result = [];
    for (let i = 1; i < length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j].value > key.value) {
            arr[j + 1] = arr[j];
            arr[j].style = "bar-swap";
            result.push(JSON.parse(JSON.stringify(arr)));
            j--;
        }
        arr[j + 1] = key;
        arr[j + 1].style = "bar-insert";
        result.push(JSON.parse(JSON.stringify(arr)));
    }
    arr.forEach(element => element.style = "bar-sorted");
    result.push(JSON.parse(JSON.stringify(arr)));
    return result;
};

export default insertionSort;
