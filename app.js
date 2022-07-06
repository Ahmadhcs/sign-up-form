
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");

const button  = document.querySelector(".buttonStyle");

button.addEventListener('click', (e) => {

    e.preventDefault();
    if(password.value == confirm.value){
        confirm.classList.remove(".confirmation");

        console.log("eh");
    }else{
        alert("The Passwords Don't Match!")
        confirm.classList.add(".confirmation");

        console.log("not matching");
    }
    console.log("hello");




});
