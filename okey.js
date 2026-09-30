runAfterLoad(function() {
    if (elements.molten_lye) {
        
        // ÉTAPE 1 : On force la soude fondue à conduire l'électricité (ex: conductivité de 40%)
        elements.molten_lye.conductivity = 0.4;

        // ÉTAPE 2 : On configure la réaction chimique
        if (!elements.molten_lye.reactions) {
            elements.molten_lye.reactions = {};
        }

        elements.molten_lye.reactions.electric = {
            elem1: "molten_sodium",     // Devient du sodium fondu
            elem2: ["oxygen", "steam"], // Libère de l'oxygène et de la vapeur
            chance: 0.25
        };
        
    }
});
