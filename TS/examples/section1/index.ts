interface LabelledObj {
    label:string
}

function printLabel(labelledObj: LabelledObj) {
    console.log(labelledObj.label)
}
let myObj = {
    size:10,
    label:'Size 10 Object'
}
printLabel(myObj)