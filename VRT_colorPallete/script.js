let grados =  359;
let cantidad = 5;
let angulo = (360 / cantidad);
let colores = [];

function randomPalette() {
	let inicial = Math.floor(Math.random() * 360);
  colores = [];
  agregarColor(inicial);

  for (let i = 0; i < cantidad-1; i++) {
    inicial += angulo;
    agregarColor(inicial);
  }
  generateRules(colores);

}

function agregarColor(angul){
  var rgb = hslToRgb(angul/359, 0.5, 0.5);
  colores.push(rgbToHex(rgb[0], rgb[1], rgb[2]));
}

function rgbToHex(r, g, b) {
    return "#" +
        ("0" + parseInt(r, 10).toString(16)).slice(-2) +
        ("0" + parseInt(g, 10).toString(16)).slice(-2) +
        ("0" + parseInt(b, 10).toString(16)).slice(-2);
}

function generateRules(colores) {
    editarReglas(colores);
    mostrarColor(colores);
}

function cleanPalette() {
    let fff = "#FFFFFF";
    colores = [];
    editarReglas([fff,fff,fff,fff,fff]);
    mostrarColor([fff,fff,fff,fff,fff]);
}

function editarReglas(colores){
  var reglas = [];
  reglas.push(".website-background{ color: " + colores[1] + ";}");
  reglas.push(".element-text{ color: " + colores[1] + ";}");
  reglas.push(".element-border{ border-color:" + colores[2] + ";}");
  reglas.push(".element-background{ background-color: " + colores[3] + ";}");
  reglas.push(".header{ color: " + colores[4] + ";}");
  $("#css-rules").val(reglas.join("\n"));
}

function mostrarColor(colores){
    for(var index = 0; index < colores.length; index++){
      $("#color"+(index+1)).css("background-color", colores[index]);
    }
}
