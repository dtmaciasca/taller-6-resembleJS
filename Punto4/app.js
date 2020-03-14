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
      var respuesta = `{
        "isSameDimensions": "`+data.isSameDimensions+`",
        "dimensionDifference": { "width": `+data.dimensionDifference.width+`, "height": `+data.dimensionDifference.height+` },
        "rawMisMatchPercentage": `+data.rawMisMatchPercentage+`,
        "misMatchPercentage": "`+data.misMatchPercentage+`",
        "diffBounds": { "top": `+data.diffBounds.top+`, "left": `+data.diffBounds.left+`, "bottom": `+data.diffBounds.bottom+`, "right": `+data.diffBounds.right+`},
        "analysisTime": `+data.analysisTime+` }`
      fs.writeFileSync(rutaResultado+cantidad+'.txt', respuesta);
		});
	},

  listarImagenes1:function()
	{
		let files = fs.readdirSync(rutaImagen1);
		return files;
	}

}
