const heapSort = (arr, length) => {
    var result = [];
    function heapify(arr, n, i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && arr[left].value > arr[largest].value) {
            largest = left;
        }

        if (right < n && arr[right].value > arr[largest].value) {
            largest = right;
        }

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            arr[i].style = "bar-swap";
            arr[largest].style = "bar-swap";
            result.push(JSON.parse(JSON.stringify(arr)));
            heapify(arr, n, largest);
        }
    }

    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapify(arr, length, i);
    }

    for (let i = length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        arr[0].style = "bar-swap";
        arr[i].style = "bar-sorted";
        result.push(JSON.parse(JSON.stringify(arr)));
        heapify(arr, i, 0);
    }

    arr.forEach(element => element.style = "bar-sorted");
    result.push(JSON.parse(JSON.stringify(arr)));
    return result;
};

export default heapSort;
