const cypress = require('cypress');
const resemble = require("resemblejs");
const compare = require("resemblejs").compare;
const fs = require('fs');

let rutaImagen1='./imagenes/imagen1/';
let rutaImagen2='./imagenes/imagen2/';
let rutaResultado='./imagenes/resultado/';

module.exports={

ejecutarCypress:function(){
		cypress.run({
		spec: './cypress/integration/test.js'
		})
		.then((results) => {
		console.log(results)
		let cantidad=this.copiarArchivo();

		this.comparar(cantidad);
		})
		.catch((err) => {
		console.error(err)
		});
	},

  copiarArchivo:function() {
  		let cantidad = fs.readdirSync(rutaImagen1).length + 1;
  		fs.copyFileSync('./cypress/screenshots/test.js/imagen1.png',rutaImagen1+cantidad+'.png');
      fs.copyFileSync('./cypress/screenshots/test.js/imagen2.png',rutaImagen2+cantidad+'.png');
      return cantidad;
  },

  comparar:function(cantidad) {
		resemble(rutaImagen1+cantidad+'.png').compareTo(rutaImagen2+cantidad+'.png').ignoreLess().onComplete(function(data){
			fs.writeFileSync(rutaResultado+cantidad+'.png', data.getBuffer());
			console.log(data);
		});
	},

  listarImagenes1:function()
	{
		let files = fs.readdirSync(rutaImagen1);
		return files;
	},

  listarImagenes:function()
	{
    console.log('populate..............');
    var tableRef = document.getElementById('pantallazos').getElementsByTagName('tbody')[0];

    var newRow = tableRef.insertRow(tableRef.rows.length);
    newRow.innerHTML = "<td><img src=./imagenes.png></td>";
	}

}
