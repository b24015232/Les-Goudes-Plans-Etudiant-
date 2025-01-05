/*FORMULAIRE*/

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form"); // Sélection du formulaire
    const prenomInput = document.getElementById("prenom"); // Champ prénom
    const mailInput = document.getElementById("mail"); // Champ email
    const reasonInput = document.getElementById("reason");
    
    form.addEventListener("submit", function(event) {
        let isValid = true;

        // Vérification du prénom : pas de chiffres
        const prenomRegex = /^[A-Za-zÀ-ÿ\-\' ]+$/; // Lettres (y compris accentuées), espaces, tirets, apostrophes
        if (!prenomRegex.test(prenomInput.value)) {
            isValid = false;
            alert("Le prénom ne doit pas contenir de chiffres ou de caractères spéciaux.");
        }

        // Vérification de l'email : doit contenir "@" et un "."
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(mailInput.value)) {
            isValid = false;
            alert("Veuillez entrer une adresse email valide.");
        }

        // Empêche l'envoi si des erreurs sont détectées
        if (!isValid) {
            event.preventDefault();
        }
    });
});

/*Menu version mobile*/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}





/*Mode bleu*/

/*Fonction qui switch d'une feuille de style à une autre*/
function toggleBleuMode() {
    var bleuModeStylesheet = document.getElementById("style_bleu-stylesheet");
    bleuModeStylesheet.disabled = !bleuModeStylesheet.disabled


/* Fonction qui enregistre le mode choisie dans le localStorage */ 
if (bleuModeStylesheet.disabled) {
        localStorage.setItem("theme", "normal");
    } else {
        localStorage.setItem("theme", "bleu");
    }
}
    


/*Fonction qui applique le theme choisi à toutes les pages lors de la navigation ou d'un rafraichissement*/
document.addEventListener("DOMContentLoaded", function() {
    var savedTheme = localStorage.getItem("theme");

    if (savedTheme === "bleu") {
        document.getElementById("style_bleu-stylesheet").disabled = false;
        button = buttonAfter ;


    } else {
        document.getElementById("style_bleu-stylesheet").disabled = true;
        
    }
});





