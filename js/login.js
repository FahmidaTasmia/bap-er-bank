document.getElementById('btn-submit').addEventListener('click',function(){
    //step-2 get the email address
    //always remember to use value to get text from an input field

    const emailField = document.getElementById('user-email');
    const email= emailField.value;
    //step-3 get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //don not do it in future
    //step:4 veryfiy email

    if(email==='sontan@bap.com' && password === 'secret'){
       window.location.href = 'bank.html'
    }
    else {
        alert('toke ami tejjo sontan gushona korlam');
    }
})