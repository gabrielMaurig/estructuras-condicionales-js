/* 
b) Crear 2 variables con valores numéricos libres:
var cantidadDeGatos = 5;
var cantidadDePasos = 3;
A partir de esas 2 variables, la consola debe mostrar lo siguiente:
Gato #1: 🐈 🐾🐾🐾
Gato #2: 🐈 🐾🐾🐾
Gato #3: 🐈 🐾🐾🐾
Gato #4: 🐈 🐾🐾🐾
Gato #5: 🐈 🐾🐾🐾

Si se utilizan otros valores, el resultado en la consola debe adaptarse.
var cantidadDeGatos = 2;
var cantidadDePasos = 8;
Gato #1: 🐈 🐾🐾🐾🐾🐾🐾🐾🐾
Gato #2: 🐈 🐾🐾🐾🐾🐾🐾🐾🐾
 */

console.warn('Punto B -------------------------------------------------------')
var cantidadDeGatos = 5;
var cantidadDePasos = 3;

for (i = 1; i <= cantidadDeGatos; i++) {
    var patitas = '';
    for (j = 1; j <= cantidadDePasos; j++) {
        patitas = patitas + '🐾';
    };

    console.log(
        'Gato #'
        + i + ': 🐈'
        + patitas);
}