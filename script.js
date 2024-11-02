function calculerSurface(largeur, hauteur) {
    return largeur * hauteur;
}

function calculerLaine(surface, surfaceEchantillon, poidsEchantillon) {
    if (surfaceEchantillon === 0) {
        alert("La surface de l'échantillon ne peut pas être zéro.");
        return 0;
    }
    return (surface / surfaceEchantillon) * poidsEchantillon;
}

function calculerLaineCorps() {
    const largeurEchantillon = parseFloat(document.getElementById('largeurEchantillon').value);
    const hauteurEchantillon = parseFloat(document.getElementById('hauteurEchantillon').value);
    const poidsEchantillon = parseFloat(document.getElementById('poidsEchantillon').value);
    const largeurCorps = parseFloat(document.getElementById('largeurCorps').value);
    const hauteurCorps = parseFloat(document.getElementById('hauteurCorps').value);

    if (isNaN(largeurEchantillon) || isNaN(hauteurEchantillon) || isNaN(poidsEchantillon) ||
        isNaN(largeurCorps) || isNaN(hauteurCorps)) {
        alert("Veuillez remplir toutes les informations nécessaires pour l'échantillon et le corps.");
        return;
    }

    const surfaceEchantillon = calculerSurface(largeurEchantillon, hauteurEchantillon);
    const surfaceCorps = calculerSurface(largeurCorps, hauteurCorps);
    const laineCorpsSimple = calculerLaine(surfaceCorps, surfaceEchantillon, poidsEchantillon);
    const laineCorpsTotal = laineCorpsSimple * 2; // Multiplier par 2 pour le devant et le dos

    document.getElementById('resultatCorps').textContent = `Résultat pour un morceau : ${laineCorpsSimple.toFixed(2)} g`;
    document.getElementById('resultatCorpsTotal').textContent = `Total pour le corps (devant et dos) : ${laineCorpsTotal.toFixed(2)} g`;

    return laineCorpsTotal; // Retourner la valeur pour l'utiliser dans le calcul final
}

function calculerLaineManches() {
    const largeurEchantillon = parseFloat(document.getElementById('largeurEchantillon').value);
    const hauteurEchantillon = parseFloat(document.getElementById('hauteurEchantillon').value);
    const poidsEchantillon = parseFloat(document.getElementById('poidsEchantillon').value);
    const largeurManches = parseFloat(document.getElementById('largeurManches').value);
    const longueurManches = parseFloat(document.getElementById('longueurManches').value);

    if (isNaN(largeurEchantillon) || isNaN(hauteurEchantillon) || isNaN(poidsEchantillon) ||
        isNaN(largeurManches) || isNaN(longueurManches)) {
        alert("Veuillez remplir toutes les informations nécessaires pour l'échantillon et les manches.");
        return;
    }

    const surfaceEchantillon = calculerSurface(largeurEchantillon, hauteurEchantillon);
    const surfaceManches = calculerSurface(largeurManches, longueurManches);
    const laineManchesSimple = calculerLaine(surfaceManches, surfaceEchantillon, poidsEchantillon);
    const laineManchesTotal = laineManchesSimple * 2; // Multiplier par 2 pour la manche gauche et la manche droite

    document.getElementById('resultatManches').textContent = `Résultat pour une manche : ${laineManchesSimple.toFixed(2)} g`;
    document.getElementById('resultatManchesTotal').textContent = `Total pour les deux manches : ${laineManchesTotal.toFixed(2)} g`;

    return laineManchesTotal; // Retourner la valeur pour l'utiliser dans le calcul final
}

function calculerLaineTotale() {
    const laineCorpsTotal = calculerLaineCorps();
    const laineManchesTotal = calculerLaineManches();

    if (isNaN(laineCorpsTotal) || isNaN(laineManchesTotal)) {
        alert("Veuillez calculer la laine pour le corps et les manches.");
        return;
    }

    const totalLaine = laineCorpsTotal + laineManchesTotal;
    document.getElementById('resultatTotal').textContent = `Total pour les deux manches et le corps : ${totalLaine.toFixed(2)} g`;
}
