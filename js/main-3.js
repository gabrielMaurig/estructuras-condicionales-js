/* 
c) Adaptar el ejercicio anterior para que se muestren 2 gatos alternadamente:
var cantidadDeGatos = 10;
var cantidadDePasos = 4;
Gato #1: 🐈 🐾🐾🐾🐾
Gato #2: 🐈‍⬛ ⬛🐾🐾🐾
Gato #3: 🐈 🐾🐾🐾🐾
Gato #4: 🐈‍⬛ ⬛🐾🐾🐾
*/
console.warn('Punto C -------------------------------------------------------')
var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (i = 1; i <= cantidadDeGatos; i++) {
    /*     console.log(i + 'I'); */
    var patitas = '';
    var cubo = '⬛';
    for (j = 1; j <= cantidadDePasos; j++) {
        patitas = patitas + '🐾';

    }
    console.log(
        'Gato #' + i
        + ': 🐈'
        + (i % 2 != 0 ?  patitas :
            i % 2 == 0 ? cubo + patitas : patitas)
    )
}
