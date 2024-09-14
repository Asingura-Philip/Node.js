const form = document.getElementById("form")
const nameErr = document.getElementById("errName")
const emailErr = document.getElementById("errEmail")



form.addEventListener('submit',(e)=>{
   
    
    isValid = true
    nameErr.textContent = ''
    emailErr.textContent = ''
    
    const name = document.getElementById('name').value

    
    // const occupation = document.getElementById('occupation').value
    const email = document.getElementById('email').value
    // const address = document.getElementById('address').value
    
    const validName = /^[A-Za-z]+(?: [A-Za-z]+)*$/
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!validName.test(name)){
        nameErr.textContent = "Invalid Name"
        isValid = false
        // console.log('invalid')
    }
    if(!validEmail.test(email)){
        emailErr.textContent = "invalid Email"
        isValid = false
    }
    if(!isValid){
        e.preventDefault()
    }
})