window.onload = function () {
    var button = document.querySelector("button");
    var inp1 = document.getElementById("num1");
    var inp2 = document.getElementById("num2");
    function add(num1, num2) {
        return num1 + num2;
    }
    button.addEventListener("click", function () {
        console.log('Test');
        console.log(add(inp1.value, inp2.value));
    });
};
