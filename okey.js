runAfterLoad(function() {
    // On s'assure que la soude fondue existe bien dans le jeu
    if (elements.molten_lye) {
        
        // Si la liste des réactions n'existe pas, on la crée
        if (!elements.molten_lye.reactions) {
            elements.molten_lye.reactions = {};
        }

        // On applique l'électrolyse avec l'élément "electric"
        elements.molten_lye.reactions.electric = {
            elem1: "molten_sodium",     // Devient du sodium fondu (liquide chaud)
            elem2: ["oxygen", "steam"], // L'électricité dégage de l'oxygène et de la vapeur
            chance: 0.25
        };
        
    }
});
