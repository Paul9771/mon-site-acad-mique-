// Attendre que la page soit complètement chargée
window.addEventListener('DOMContentLoaded', () => {
    
    const notification = document.getElementById('notification-projet');
    const boutonFermer = document.getElementById('fermer-notif');

    // Déclencher l'animation (faire monter la note) après 2 secondes d'attente
    setTimeout(() => {
        notification.classList.add('afficher');
    }, 2000);

    // Fermer la note en douceur si l'utilisateur clique sur la croix
    boutonFermer.addEventListener('click', () => {
        notification.classList.remove('afficher');
    });
});