// On s'assure que la liste des réactions pour la soude fondue existe
if (!elements.molten_lye.reactions) {
    elements.molten_lye.reactions = {};
}

// Ajout de la réaction d'électrolyse exacte (génère du sodium fondu)
elements.molten_lye.reactions.electric = {
    elem1: "molten_sodium",          // Produit directement la version liquide chaude
    elem2: ["oxygen", "steam"],      // L'électricité se transforme en oxygène et vapeur
    chance: 0.25
};
