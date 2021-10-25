// Get the modal
var modal = document.getElementById('dialogueModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var tradeModal = document.getElementById('tradeModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == tradeModal) {
        tradeModal.style.display = "none";
    }
}

