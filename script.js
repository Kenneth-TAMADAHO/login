var email=document.querySelector("#email")
var password=document.querySelector("#password")
var bouton1=document.querySelector(".bouton1")

bouton1.addEventListener("click",function (e) {
  e.preventDefault();
  if (email.value != "" && password.value != "") {
     if (RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$").test(email.value)) {
        if (password.value.length >= 8) {
          if (RegExp("[A-Z]").test(password.value)) {
            if (RegExp("[a-z]").test(password.value)) {
              if (RegExp("[0-9]").test(password.value)) {
                  alert("Good")
                } else {
                    alert("Le mot de passe doit contenir au moins un chiffre.")
                }
              } else {
                  alert("Le mot de passe doit contenir au moins une lettre minuscules.")
              }
            } else {
                alert("Le mot de passe doit contenir au moins une lettre majuscules.")
            }
          } else {
              alert("Le mot de passe doit contenir au moins 8 caractére.")
          }
        } else {
            alert("Adresse email invalide.")
        }
    } else {
        alert("Veuillez renseigner tous les champs.")
    }
})


