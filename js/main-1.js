/* 
a) 
Crear una variable con un valor numérico libre:
var cantidadDeGatos = 10;
Esto debe generar en la consola lo siguiente:
Gato #1: 😺
Gato #2: 😸, etc
*/

console.warn('Punto A -------------------------------------------------------')
var gatos = 10;

for (i = 10; i <= 20; i++) {
    console.log(
        'Gato #'
        + i +
        (i % 3 == 1 ? ': 😺' :
            i % 3 == 2 ? ': 😸' : ': 😹'
        ));
}
