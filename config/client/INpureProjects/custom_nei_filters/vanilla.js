var vanilla_blocks = ["portal", "end_portal", "fire",];
if (vanilla_enabled){
    for each (block in vanilla_blocks){
        // Vanilla items and blocks have special handlers.
	    NEI.hide("minecraft", block);
    }
}