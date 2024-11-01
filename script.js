function calculerLaine() {
    // Récupérer les valeurs entrées par l'utilisateur
    const largeurEchantillon = parseFloat(document.getElementById('largeurEchantillon').value);
    const hauteurEchantillon = parseFloat(document.getElementById('hauteurEchantillon').value);
    const poidsEchantillon = parseFloat(document.getElementById('poidsEchantillon').value);
    const largeurPull = parseFloat(document.getElementById('largeurPull').value);
    const hauteurPull = parseFloat(document.getElementById('hauteurPull').value);
    const longueurManche = parseFloat(document.getElementById('longueurManche').value);
    const largeurManchePoignet = parseFloat(document.getElementById('largeurManchePoignet').value);
    const largeurMancheCoude = parseFloat(document.getElementById('largeurMancheCoude').value);

    // Vérifier que toutes les valeurs sont des nombres valides
    if (
        isNaN(largeurEchantillon) || is
