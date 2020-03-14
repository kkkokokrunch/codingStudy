function insert(arr) {
    if(!arr || arr.length < 2) return arr
    for(let i = 1;i < arr.length;i++) {
        for(let j = i - 1;j >= 0 && arr[j] > arr[j+1];j--) {
            {arr[i],arr[j]} = {arr[j],arr[i]}
        }
    }
}