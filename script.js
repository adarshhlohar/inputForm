
var salaryInput = document.getElementById('salary');
            var output = document.querySelector('.salary-output');
        
            salaryInput.addEventListener('input', function() {
                output.textContent = salaryInput.value;
            });


const submit = document.getElementById("submit");
const name = document.getElementById("name");
const email = document.getElementById("email");

const nameError = document.getElementById("nameError");

name.addEventListener("blur", () => {
    console.log("name has been blured")
    let regex = /^[A-Z]{1}[a-zA-Z]{2,9}$/;
    let str = name.value;
    if(regex.test(str)){
        console.log(`This is valid ${str}`);
        submit.removeAttribute("disabled");
        nameError.style.display = "none";
    }else{
        console.log(`This is not valid ${str}`);
        submit.setAttribute("disabled","true");
        nameError.style.display = "block";
        nameError.innerText = "First name starts with Cap and has minimum 3 characters";
    }
});

email.addEventListener("blur", ()=>{
    console.log("The pwd has been blured");
    let regex = /^[a-z]{3,9}\.[a-z]{0,}\@bl\.co\.?i?n?/;
    let str = email.value;

    if (regex.test(str)) {
        console.log(`This is valid ${str}`);
        submit.removeAttribute("disabled");
        emailError.style.display = "none";
    }else{
        console.log(`This not valid ${str}`);
        submit.setAttribute("disabled","true");
        emailError.innerText = "Email has 3 mandatory parts (abc, bl& co) and 2 optional (xyz & in) with precise @ and . positions";
        emailError.style.display = "block";
    }
});


