<div style="width:640px;height:480px;max-width:100%">
    <div id="game"></div>
</div>

<script type="text/javascript">
    // Set the target div where the emulator will load
    EJS_player = '#game';

    // Set the URL for the BIOS file (if required for your game/emulator)
    EJS_biosUrl = '';  // Optional: Provide the URL to the BIOS file if needed by the core

    // Provide the URL to the game ROM
    EJS_gameUrl = 'https://Rom-Player-Html.github.io/Roms/GBA/Pokemon Ultra Violet.gba'; // Replace with actual URL of the game

    // Set the core for the emulator
    EJS_core = 'gba'; // Optional: Set the core. 'gba' is for Game Boy Advance. Choose the core based on the game type.

    // Load the EmulatorJS script
    var script = document.createElement('script');
    script.src = "https://www.emulatorjs.com/loader.js";
    script.onload = function() {
        // Initialize the emulator once the script is loaded
        if (EJS_gameUrl) {
            // Ensure a valid game URL is provided
            EJS_loadGame(EJS_gameUrl, EJS_player, EJS_biosUrl, EJS_core);
        } else {
            console.error('Game URL is missing!');
        }
    };
    document.head.appendChild(script); // Dynamically add the script to the page
</script>
