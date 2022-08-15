//step-1:add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){

   //step-2:get the email address inside the email input field
  //always remember to .value to get text form an input 
  const emailField=document.getElementById('user-email');
  const email=emailField.value;
  //step-3:get password
  //3.a.set id on the html element
  //3.b.get the element
  //3.c.get the value from the element
  const passwordField=document.getElementById('user-password');
  const password=passwordField.value;
  //verified email and password
  if(email=='lutfor@gmail.com'&&password=='12345'){
       window.location.href='bank.html';
  }
  else{
    alert('Incorrect');
  }
});