// Get the modal
const modal = document.getElementById('dialogueModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


document.getElementById('wallet-address').readOnly = true;
document.getElementById('wallet-address-1').readOnly = true;
document.getElementById('wallet-address-2').readOnly = true;
