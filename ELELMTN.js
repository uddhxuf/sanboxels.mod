// On s'assure que la Lye fondue existe dans le jeu
elements.molten_lye = elements.molten_lye || {};

// On ajoute une fonction qui s'exécute à chaque tick du jeu pour la molten_lye
elements.molten_lye.tick = function(pixel) {
    // Liste des directions pour vérifier les pixels voisins (Haut, Bas, Gauche, Droite)
    let neighbors = [
        {x: pixel.x, y: pixel.y-1},
        {x: pixel.x, y: pixel.y+1},
        {x: pixel.x-1, y: pixel.y},
        {x: pixel.x+1, y: pixel.y}
    ];

    for (let pos of neighbors) {
        // Si la case voisine est hors de l'écran, on passe
        if (pos.x < 0 || pos.x >= width || pos.y < 0 || pos.y >= height) continue;
        
        let neighborPixel = pixelMap[pos.x][pos.y];
        
        // Si le pixel voisin est du Cuivre (copper) ET qu'il a une charge électrique (> 0)
        if (neighborPixel && neighborPixel.element === "copper" && neighborPixel.charge > 0) {
            // On transforme instantanément la molten_lye en sodium !
            changePixel(pixel, "sodium");
            break; // On arrête la boucle pour ce pixel
        }
    }
};
