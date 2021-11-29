// Get the modal
const modal = document.getElementById('dialogueModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Makes the input field of the wallet address readonly
document.getElementById('wallet-address').readOnly = true;
document.getElementById('wallet-address-1').readOnly = true;
document.getElementById('wallet-address-2').readOnly = true;


//Code for controlling the click to copy function
function copyClick() {
    const copyText = document.getElementById("wallet-address");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
}
  
function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}