window.onload = function () {
    var button = document.querySelector("button")! as HTMLButtonElement;
    var inp1 = document.getElementById("num1")! as HTMLInputElement; 
    var inp2 = document.getElementById("num2")! as HTMLInputElement; 

    function add(num1 : number , num2 : number) {
        return num1 + num2;
    }

    button.addEventListener("click", function () {
        console.log('Test');
        console.log(add(+inp1.value, +inp2.value));
    });

}
