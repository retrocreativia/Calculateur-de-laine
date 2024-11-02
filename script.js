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
    const laineCorps = calculerLaine(surfaceCorps, surfaceEchantillon, poidsEchantillon);

    document.getElementById('resultatCorps').textContent = laineCorps.toFixed(2);
}

function calculerLaineManches() {
    const largeurEchantillon = parseFloat(document.getElementById('largeurEchantillon').value);
    const hauteurEchantillon = parseFloat(document.getElementById('hauteurEchantillon').value);
    const poidsEchantillon = parseFloat(document.getElementById('poidsEchantillon').value);
    const largeurManches = parseFloat(document.getElementById('largeurManches').value);
    const hauteurManches = parseFloat(document.getElementById('hauteurManches').value);

    if (isNaN(largeurEchantillon) || isNaN(hauteurEchantillon) || isNaN(poidsEchantillon) ||
        isNaN(largeurManches) || isNaN(hauteurManches)) {
        alert("Veuillez remplir toutes les informations nécessaires pour l'échantillon et les manches.");
        return;
    }

    const surfaceEchantillon = calculerSurface(largeurEchantillon, hauteurEchantillon);
    const surfaceManches = calculerSurface(largeurManches, hauteurManches);
    const laineManches = calculerLaine(surfaceManches, surfaceEchantillon, poidsEchantillon);

    document.getElementById('resultatManches').textContent = laineManches.toFixed(2);
}

function calculerLaineTotale() {
    const laineCorps = parseFloat(document.getElementById('resultatCorps').textContent);
    const laineManches = parseFloat(document.getElementById('resultatManches').textContent);

    if (isNaN(laineCorps)) {
        alert("Veuillez calculer la laine pour le corps.");
        return;
    }

    const totalLaine = isNaN(laineManches) ? laineCorps : laineCorps + laineManches;

    document.getElementById('resultatTotal').textContent = totalLaine.toFixed(2);
}
