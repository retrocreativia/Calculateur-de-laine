let yarnNeededBody = 0;
let yarnNeededSleeve = 0;

function calculateYarn(section) {
    const widthSwatch = parseFloat(document.getElementById('width-swatch').value);
    const heightSwatch = parseFloat(document.getElementById('height-swatch').value);
    const weightSwatch = parseFloat(document.getElementById('weight-swatch').value);

    if (isNaN(widthSwatch) || isNaN(heightSwatch) || isNaN(weightSwatch)) {
        alert('Veuillez remplir toutes les informations concernant l\'échantillon avec des valeurs valides.');
        return;
    }

    const areaSwatch = widthSwatch * heightSwatch;

    if (section === 'body') {
        const widthBody = parseFloat(document.getElementById('width-body').value);
        const heightBody = parseFloat(document.getElementById('height-body').value);
        const resultBody = document.getElementById('result-body');

        if (!isNaN(widthBody) && !isNaN(heightBody)) {
            const areaBody = widthBody * heightBody;
            const numSwatchesBody = areaBody / areaSwatch;
            yarnNeededBody = numSwatchesBody * weightSwatch;
            resultBody.innerHTML = `Quantité de laine estimée pour le corps : ${yarnNeededBody.toFixed(2)} g`;
        } else {
            resultBody.innerHTML = 'Veuillez remplir les mesures du corps pour le calcul.';
        }
    }

    if (section === 'sleeve') {
        const widthSleeve = parseFloat(document.getElementById('width-sleeve').value);
        const heightSleeve = parseFloat(document.getElementById('height-sleeve').value);
        const resultSleeve = document.getElementById('result-sleeve');

        if (!isNaN(widthSleeve) && !isNaN(heightSleeve)) {
            const areaSleeve = widthSleeve * heightSleeve;
            const numSwatchesSleeve = areaSleeve / areaSwatch;
            yarnNeededSleeve = numSwatchesSleeve * weightSwatch;
            resultSleeve.innerHTML = `Quantité de laine estimée pour les manches : ${yarnNeededSleeve.toFixed(2)} g`;
        } else {
            resultSleeve.innerHTML = 'Veuillez remplir les mesures des manches pour le calcul.';
        }
    }

    // Calcul du total si les deux valeurs sont présentes
    const resultTotal = document.getElementById('result-total');
    if (yarnNeededBody > 0 && yarnNeededSleeve > 0) {
        const totalYarn = yarnNeededBody + yarnNeededSleeve;
        resultTotal.innerHTML = `Quantité totale de laine estimée pour le corps et les manches : ${totalYarn.toFixed(2)} g`;
    } else {
        resultTotal.innerHTML = '';
    }
}
