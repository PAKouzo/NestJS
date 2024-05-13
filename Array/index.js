const array = [1, 2, "Hieu", "Hoang", 22, "Ha Noi"]
const array1 = [20, 21]
const array2 = [22, 23]
console.log(array[2])
array.push(9)
console.log(array.push(10))
const array3 = array.concat(array1)
console.log(array3)
array1.push(...array2)
console.log(array1)

const x = [1, 2, 3, 4, 5]
x.splice(3, 1, 6) //splice(location, x, value): thêm phần tử có giá trị VALUE vào vị trí LOCATION và xóa x phần tử kể từ vị trí LOCATION.
console.log("mảng x:", x)