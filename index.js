const moment = require('moment')
const coolImages = require('cool-images');
const fs = require('fs');

let fechaActual = moment().format('YYYY/MM/DD HH:mm:ss');
console.log(fechaActual)

let abc = 'Clase 42 \n';

let arrayUrlImages = coolImages.many();  //devuelve un array con 6 urls.

arrayUrlImages.forEach(e => {
    console.log(e)
})

fs.writeFileSync('texto.txt', abc);

fs.appendFileSync('./texto.txt', `Fecha actual: ${fechaActual} \n`);
fs.appendFileSync('./texto.txt', `Url usadas: ${arrayUrlImages} \n`);

fs.readFile('./texto.txt', 'utf-8', (err, datos) => { console.log(datos) });

