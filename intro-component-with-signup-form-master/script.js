const form = document.getElementById("form");


form.addEventListener("submit", e=>{
    e.preventDefault();

    const first = form['first-name'].value;
    const last = form['last-name'].value;
    const email = form['email'].value;
    const password = form['password'].value; 

    if(first === ""){
        addError('first-name','First name required')
    }
    else{
        removeError('first-name')

    }

    if(last === ""){
        addError('last-name','Last name required')
    }
    else{
        removeError('last-name')

    } 

    if(email === ""){
        addError('email','Email required')
    }
    else if(!emailValid(email)){
        addError('email','Email invalid')
    }
    else{
        removeError('email')
    }

    if(password === ""){
        addError('password','Password required')
    }
    else{
        removeError('password')
    }
    
    if(noError()){
        document.body.innerHTML = `<div style="display:flex; align-items: center; justify-content: center;;"><h1>You are ready to learn!</h1></div>`;
    }

})

function addError(field, message){
    const small = form[field].parentNode.querySelector('small');
    const formControl = form[field].parentNode; 
    small.innerText = message;
    formControl.classList.add("error")
}

function removeError(field){
    const small = form[field].parentNode.querySelector('small');
    const formControl = form[field].parentNode; 
    small.innerText = '';
    formControl.classList.remove("error")
}

function emailValid(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function noError(){
    const formControlFirst = form['first-name'].parentNode; 
    const formControlLast = form['last-name'].parentNode;
    const formControlEmail = form['email'].parentNode; 
    const formControlPass = form['password'].parentNode;

    if(!formControlEmail.classList.contains("error")&&
    !formControlFirst.classList.contains("error") &&
    !formControlLast.classList.contains("error") &&
    !formControlPass.classList.contains("error")){
        return true
    }
    else{
        return false
    }
}