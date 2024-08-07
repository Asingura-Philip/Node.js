let lForm = document.getElementById('lForm')
let password = document.getElementById('pass')
let userName = document.getElementById('name')


lForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    let pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(userName.value === "" || password.value === ""){
        alert("please enter all inputs")
    }else if(password.value.match(pass)){
        alert("valid input")
    }else{
        alert("password should have 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter")
    }

})