function calculerLaine() {
    const largeurEchantillon = parseFloat(document.getElementById('largeurEchantillon').value);
    const hauteurEchantillon = parseFloat(document.getElementById('hauteurEchantillon').value);
    const poidsEchantillon = parseFloat(document.getElementById('poidsEchantillon').value);
    const largeurPull = parseFloat(document.getElementById('largeurPull').value);
    const hauteurPull = parseFloat(document.getElementById('hauteurPull').value);

    if (isNaN(largeurEchantillon) || isNaN(hauteurEchantillon) || isNaN(poidsEchantillon) || isNaN(largeurPull) || isNaN(hauteurPull)) {
        alert("Veuillez remplir tous les champs avec des valeurs numériques.");
        return;
    }

    const surfaceEchantillon = largeurEchantillon * hauteurEchantillon;
    const surfacePull = largeurPull * hauteurPull;

    const quantiteLaine = (surfacePull / surfaceEchantillon) * poidsEchantillon;

    document.getElementById('resultat').textContent = quantiteLaine.toFixed(2);
}
