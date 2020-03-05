const server = require('./resemble')

// Modules required
const path = require('path');

// Constants
const ssAntes = "./Antes"
const ssDespues = "./Despues"
const resultado = "./Resultados"

var fileList = server.listFiles(ssAntes);
for (i = 0; i < fileList.length; i++){
	console.log("Comparando imagen " + (i+1) +"...");
	imagenInicial = path.join(ssAntes, fileList[i]);
    imagenFinal = path.join(ssDespues, fileList[i]);
    imagenResultado = path.join(resultado, fileList[i]);
	var result = server.compareImages(imagenInicial, imagenFinal, imagenResultado);
    console.log("resultados");
    console.log(result);
}