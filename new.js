elements.lye = elements.lye || {};
if (!elements.lye.reactions) { 
    elements.lye.reactions = {}; 
}

// Réaction au contact de n'importe quel conducteur (comme le cuivre) chargé !
elements.lye.reactions.copper = {
    elem1: null,        // La lye disparaît
    elem2: "sodium",    // Devient du sodium
    chance: 1.0,        // 100% immédiat
    charged: true       // N'arrive QUE si le cuivre a du courant
};

// Fonctionne aussi pour de la lye fondue sur le cuivre chargé
elements.molten_lye = elements.molten_lye || {};
if (!elements.molten_lye.reactions) { elements.molten_lye.reactions = {}; }
elements.molten_lye.reactions.copper = {
    elem1: null,
    elem2: "sodium",
    chance: 1.0,
    charged: true
};
