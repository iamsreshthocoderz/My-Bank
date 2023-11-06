document.getElementById('btn-submit').addEventListener('click' , function(){
    console.log('submit button click');
    const emailField  = document.getElementById('user-email');
    const email = emailField.value; 
    // get password
    // set id 
    const passwordfield = document.getElementById('user-password')
    const password =passwordfield.value;
    console.log(password);

   // don not verify email passwordon the client side

   if(email === 'sreshtho@gmail.com' && password === 'sreshtho'){
    window.location.href = 'bank.html';
   }
   else{
    alert("Invalid Email or Password");
   }

})