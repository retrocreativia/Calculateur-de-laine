function calculateYarn(section) {
    let width, height, weightSwatch, areaSwatch, resultElement;

    if (section === 'body') {
        width = document.getElementById('width-body').value;
        height = document.getElementById('height-body').value;
        weightSwatch = document.getElementById('weight-swatch-body').value;
        areaSwatch = document.getElementById('area-swatch-body').value;
        resultElement = document.getElementById('result-body');
    } else if (section === 'sleeve') {
        width = document.getElementById('width-sleeve').value;
        height = document.getElementById('height-sleeve').value;
        weightSwatch = document.getElementById('weight-swatch-sleeve').value;
        areaSwatch = document.getElementById('area-swatch-sleeve').value;
        resultElement = document.getElementById('result-sleeve');
    }

    if (width && height && weightSwatch && areaSwatch) {
        const totalArea = width * height;
        const numSwatches = totalArea / areaSwatch;
        const yarnNeeded = numSwatches * weightSwatch;
        resultElement.innerHTML = `Quantité de laine estimée : ${yarnNeeded.toFixed(2)} g`;
    } else {
        resultElement.innerHTML = 'Veuillez remplir tous les champs.';
    }
}
