 
 function togglePasswordVisibility(inputId, iconId){
   
        const passwordInput = document.getElementById(inputId);
        const eyeIcon= document.getElementById(iconId);
          if (passwordInput.type === 'password'){
            passwordInput.type = 'text';
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
             alert('clic detecter');
            
        } else{
            passwordInput.type = 'password';
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
            
        }
 }
 
//    
 
 function verify(){
    

let passwordInput=document.getElementById('password').value;
let repassword=document.getElementById('re-enterpassword').value;

let NameInput = document.getElementById('nom').value;

 let emailInput = document.getElementById('email').value;

 if(passwordInput === "" && NameInput === "" && emailInput === "" && repassword === ""){
   alert('impossible tout est vide');
 }


 
  if(NameInput === ""){
    alert('veuilez remplir le champ nom avant de continuer');
    return false;
 }
 
 if(emailInput === ""){
    alert('veuilez remplir le champ email avant de continuer');
     return false;
 }
 if(passwordInput === ""){
   alert('veuillez remplir le mot de passe  avant de continuer');
     return false;

 }
 if(repassword === ""){
    alert('veuilez remplir le champ re-enter avant de continuer');
    return false;
 }
 if(passwordInput !== repassword){
    alert('les mots de passe doivent etre identiques');
    return false;
 }
  event.target.submit()//le formulaire est envoye si tout est bon
 alert("record success");
 
     
         return true;
}
 

 