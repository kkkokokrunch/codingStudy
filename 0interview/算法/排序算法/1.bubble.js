function Bubble(arr) {
    var i, j, temp
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1;j < arr.length;j++) {
            if(arr[i] > arr[j]) {
                temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}

var arr = [6,3,7,5,8,2,1]
Bubble(arr)
console.log(arr)