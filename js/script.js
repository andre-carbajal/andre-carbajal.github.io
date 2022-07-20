//show discord id
var discord = document.getElementById('discordID');
discord.addEventListener("click", doClick);

function doClick(){
    discord.textContent = "pinhacolada.2#5607";
    navigator.clipboard.writeText('pinhacolada.2#5607');
    alert("Copied to clipboard");
}