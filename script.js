var details = {
    name: "swetha kalyan Aadhya",
    age: 30
}
let arr = [1, 2, 3, 4, 5];
let ouputArr = []
arr.forEach((item, index) => {
    //console.log(item, index)
    if (item % 2 == 0) {
        ouputArr.push(item)
    }
})
console.log(ouputArr, "******* ouput Array *********")