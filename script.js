function calculerLaine() {
    const largeurEchantillon = parseFloat(document.getElementById('largeurEchantillon').value);
    const hauteurEchantillon = parseFloat(document.getElementById('hauteurEchantillon').value);
    const poidsEchantillon = parseFloat(document.getElementById('poidsEchantillon').value);
    const largeurPull = parseFloat(document.getElementById('largeurPull').value);
    const hauteurPull = parseFloat(document.getElementById('hauteurPull').value);
    const longueurManche = parseFloat(document.getElementById('longueurManche').value);
    const largeurManchePoignet = parseFloat(document.getElementById('largeurManchePoignet').value);
    const largeurMancheCoude = parseFloat(document.getElementById('largeurMancheCoude').value);

    if (
        isNaN(largeurEchantillon) || isNaN(hauteurEchantillon) || isNaN(poidsEchantillon) ||
        isNaN(largeurPull) || isNaN(hauteurPull) || isNaN(longueurManche) ||
        isNaN(largeurManchePoignet) || isNaN(largeurMancheCoude)
    ) {
        alert("Veuillez remplir tous les champs avec des valeurs numériques.");
        return;
    }

    const surfaceEchantillon = largeurEchantillon * hauteurEchantillon;
    const surfacePull = largeurPull * hauteurPull;
    const surfaceManche = (longueurManche * (largeurManchePoignet + largeurMancheCoude)) / 2;

    const surfaceTotale = surfacePull + (2 * surfaceManche);
    const quantiteLaine = (surfaceTotale / surfaceEchantillon) * poidsEchantillon;

    document.getElementById('resultat').textContent = quantiteLaine.toFixed(2);
}
