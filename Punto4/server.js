const http = require('http');
const fs = require('fs');
var path = require('path');
var js = require('./app.js');

const hostname = '127.0.0.1';
const port = 3000;
const express = require('express');

const app = express();
// start the express web server listening on 8080
app.listen(8080, () => {
  console.log('listening on 8080');
});

const createHtml = (table) => `
<html>

<head>
  <title> Herramienta de automatización de Visual Regression Testing </title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
</head>
  <body>

    <div style="float:left; width: 80%">
      <h2 class="text-center">Información de Visual Regression Testing</h2>
    </div>
      <div class="text-left mt-4">
        <input name="like" id="demo" value="Generar reporte" type="submit" class="btn btn-primary btn-test" />
      </div>

    <div class="card m-4">
      <table class="table table-striped" id="pantallazos">
        <thead class="text-center thead-dark">
          <tr>
            <th></th>
            <th>Imagen Base</th>
            <th>Imagen modificada</th>
            <th>Diferencias</th>
            <th></th>
          </tr>
        </thead>
        <tbody>${table}
        </tbody>
      </table>
    </div>
  </body>
</html>
`;

app.get('/', (req, res) => {
  let imagenes = js.listarImagenes1();
  console.log(imagenes);
  let tabla = "";
  for(let posicion in imagenes){
      let imagen = imagenes[posicion];
      tabla += `<tr>
                <td>`+fs.statSync('./imagenes/imagen1/'+imagen).birthtime+`</td>
                <td><img src="file://`+__dirname+`/imagenes/imagen1/`+imagen+`"/></td>
                <td><img src="./imagenes/imagen2/`+imagen+`"/></td>
                <td><img src="./imagenes/resultado/`+imagen+`"/></td>
                <td></td>
                </tr>`;
  }

  res.send(createHtml(tabla));
});

js.ejecutarCypress();
