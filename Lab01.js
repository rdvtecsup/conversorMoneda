//EJERCICIO 1
// var http = require('http');
// var manejador = function(solicitud, respuesta){
//     console.log('Hola mundo!');
// }
// var servidor = http.createServer(manejador);
// servidor.listen(8080);


//EJERCICIO 2
// var http = require('http');
// var manejador = function(solicitud, respuesta){
//     console.log('Conexión entrante');
//     respuesta.end('Hola mundo!')
// }
// var servidor = http.createServer(manejador);
// servidor.listen(8080);

// EJERCICIO 3
// var http = require('http')
// var manejador = function(solicitud, respuesta){
//     var i = 0;
//     while(true){
//         respuesta.write(i+'-->');
//         i++
//     }
// }
// var servidor = http.createServer(manejador);
// servidor.listen(8080);
//EJERCICIO 4
// var http = require('http');
// fs = require('fs')

// var html = fs.readFileSync('./index.html');
// http.createServer(function(solicitud, respuesta){
//     respuesta.write(html);
//     respuesta.end();
// }).listen(8080);
//EJERCICIO 5
var http = require('http');
fs = require('fs')

http.createServer(function(solicitud, respuesta){
    fs.readFile('./index.html', function(error, html){
        respuesta.write(html);
        respuesta.end();
    });
}).listen(8080);