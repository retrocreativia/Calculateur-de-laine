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

    document.getElementById('resultatCorps').textContent = laineCorpsTotal.toFixed(2);
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

    document.getElementById('resultatManches').textContent = laineManchesTotal.toFixed(2);
}
