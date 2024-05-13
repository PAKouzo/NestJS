const x = new Function("y", "z", "return y*z")
console.log(x(5, 7))

//hàm tự gọi
(function() {
    console.log("Hello")
}())