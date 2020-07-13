function SelectSort(arr) {
  let len = arr.length
  let minIndex, temp
  for (let i = 0; i < len - 1; i++) {
    minIndex = 1
    for (let j = i + 1; j < len; j++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}