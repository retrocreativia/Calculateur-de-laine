function calculateYarn(section) {
    const widthSwatch = document.getElementById('width-swatch').value;
    const heightSwatch = document.getElementById('height-swatch').value;
    const weightSwatch = document.getElementById('weight-swatch').value;

    if (!widthSwatch || !heightSwatch || !weightSwatch) {
        alert('Veuillez remplir toutes les informations concernant l\'échantillon.');
        return;
    }

    const areaSwatch = widthSwatch * heightSwatch;

    if (section === 'body') {
        const widthBody = document.getElementById('width-body').value;
        const heightBody = document.getElementById('height-body').value;
        const resultBody = document.getElementById('result-body');

        if (widthBody && heightBody) {
            const areaBody = widthBody * heightBody;
            const numSwatchesBody = areaBody / areaSwatch;
            const yarnNeededBody = numSwatchesBody * weightSwatch;
            resultBody.innerHTML = `Quantité de laine estimée pour le corps : ${yarnNeededBody.toFixed(2)} g`;
        } else {
            resultBody.innerHTML = 'Veuillez remplir les mesures du corps pour le calcul.';
        }
    }

    if (section === 'sleeve') {
        const widthSleeve = document.getElementById('width-sleeve').value;
        const heightSleeve = document.getElementById('height-sleeve').value;
        const resultSleeve = document.getElementById('result-sleeve');

        if (widthSleeve && heightSleeve) {
            const areaSleeve = widthSleeve * heightSleeve;
            const numSwatchesSleeve = areaSleeve / areaSwatch;
            const yarnNeededSleeve = numSwatchesSleeve * weightSwatch;
            resultSleeve.innerHTML = `Quantité de laine estimée pour les manches : ${yarnNeededSleeve.toFixed(2)} g`;
        } else {
            resultSleeve.innerHTML = 'Veuillez remplir les mesures des manches pour le calcul.';
        }
    }
}

