const bubbleSort = (arr, length) => {
    var result = [];
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            arr[j].style = "bar-swap";
            arr[j + 1].style = "bar-swap";
            result.push(JSON.parse(JSON.stringify(arr)));

            if (arr[j].value > arr[j + 1].value) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        arr[length - i - 1].style = "bar-sorted";
        result.push(JSON.parse(JSON.stringify(arr)));
    }
    arr.forEach(element => element.style = "bar-sorted");
    result.push(JSON.parse(JSON.stringify(arr)));
    return result;
};

export default bubbleSort;
