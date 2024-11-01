function calculerLaine() {
    const largeurEchantillon = parseFloat(document.getElementById('largeurEchantillon').value);
    const hauteurEchantillon = parseFloat(document.getElementById('hauteurEchantillon').value);
    const poidsEchantillon = parseFloat(document.getElementById('poidsEchantillon').value);
    const largeurPull = parseFloat(document.getElementById('largeurPull').value);
    const hauteurPull = parseFloat(document.getElementById('hauteurPull').value);
    const longueurManche = parseFloat(document.getElementById('longueurManche').value);
    const largeurManche = parseFloat(document.getElementById('largeurManche').value);

    // Vérifie si les valeurs sont des nombres valides
    if (
        isNaN(largeurEchantillon) || isNaN(hauteurEchantillon) || isNaN(poidsEchantillon) ||
        isNaN(largeurPull) || isNaN(hauteurPull) || isNaN(longueurManche) || isNaN(largeurManche)
    ) {
        alert("Veuillez remplir tous les champs avec des valeurs numériques.");
        return;
    }

    // Calculs
    const surfaceEchantillon = largeurEchantillon * hauteurEchantillon;
    const surfacePull = largeurPull * hauteurPull;
    const surfaceManche = longueurManche * largeurManche; // Surface rectangulaire simple pour la manche
    const surfaceTotale = surfacePull + (2 * surfaceManche); // Corps + 2 manches

    const quantiteLaine = (surfaceTotale / surfaceEchantillon) * poidsEchantillon;

    // Affichage du résultat
    document.getElementById('resultat').textContent = quantiteLaine.toFixed(2);
}
