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