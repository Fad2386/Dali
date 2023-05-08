const text = document.querySelector("textarea");
const caunter = document.querySelector("#counter");

text.addEventListener("input", function(){
    const count = text.value.length;
    caunter.textContent = count;
})

text.addEventListener('input', function() {
    const maxLength = text.getAttribute('maxlength');
    const remaining = maxLength - text.value.length;
    caunter.textContent = remaining;
});

const num = document.querySelector(".input1");


// num.addEventListener("input", function() {
//     const sum = Math.PI * ()
// })

