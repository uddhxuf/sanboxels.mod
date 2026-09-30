if (!elements.molten_lye.reactions) {
    elements.molten_lye.reactions = {};
}

// Ajout de la réaction d'électrolyse
elements.molten_lye.reactions.electric = {
    elem1: "sodium",                
    elem2: ["oxygen", "steam"],     
    chance: 0.25                 
};
