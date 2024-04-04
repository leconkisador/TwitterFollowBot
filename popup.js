document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById("checkbox");
    const timerDisplay = document.querySelector("h2");

    
    
    let timerInterval; // Stocker l'identifiant de l'intervalle
    let count = 0; // Compteur pour suivre le nombre de fois où le timer atteint 0

    checkbox.addEventListener('click', () => {
        var itteration= document.getElementById("activation").value-1
        var minute= document.getElementById("time").value *1
        if (checkbox.checked) {
            sendModActivateMessage()
            startTimer(itteration,minute); // Démarre le timer
        } else {
            stopTimer(); // Arrête le timer
        }
    });

    // Fonction pour démarrer le timer
    function startTimer(itteration,minute) {
        let timeLeft = minute * 60; // 10 minutes en secondes
        displayTime(timeLeft);
        timerInterval = setInterval(() => {
            timeLeft--;
            displayTime(timeLeft);
            if (timeLeft === 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = "--:--"; // Réinitialiser le timer à 10:00
                count++;
                if (count < itteration) {
                    setTimeout(() => {
                        startTimer(itteration,minute);
                    }, 1000);
                } else {
                    count = 0; // Réinitialiser le compteur
                }
                sendModActivateMessage(); // Envoyer le message "modActivate"
            }
        }, 1000); // Mettre à jour chaque seconde
    }

    // Fonction pour arrêter le timer
    function stopTimer() {
        clearInterval(timerInterval);
        timerDisplay.textContent = "--:--"; // Réinitialiser le timer à 10:00
        count = 0; // Réinitialiser le compteur si l'utilisateur désactive le timer manuellement
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "modNotActivate"});
        });
    }

    // Fonction pour envoyer le message "modActivate"
    function sendModActivateMessage() {
        let n = document.getElementById("n").value;
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "modActivate", n: n});
        });
    }

    // Fonction pour afficher le temps au format "MM:SS"
    function displayTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const display = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        timerDisplay.textContent = display;
    }
});
