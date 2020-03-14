const http = require('http');
const fs = require('fs');
var path = require('path');
var js = require('./app.js');
const dateFormat = require('dateformat');
const reload = require('reload');

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
  <form action="/cypress" method="post">

    <div style="float:left; width: 80%">
      <h2 class="text-center">Información de Visual Regression Testing</h2>
    </div>
      <div class="text-left mt-4">
        <input class="btn btn-success" type="submit" value="Generar reporte" />
      </div>

    <div class="card m-4">
      <table class="table table-striped" id="pantallazos">
        <thead class="text-center thead-dark">
          <tr>
            <th>Fecha reporte</th>
            <th>Imagen Base</th>
            <th>Imagen modificada</th>
            <th>Diferencias</th>
            <th>Resumen comparación</th>
          </tr>
        </thead>
        <tbody>${table}
        </tbody>
      </table>
    </div>
    </form>
  </body>
</html>
`;

app.get('/', (req, res) => {
  let imagenes = js.listarImagenes1();
  let tabla = "";
  for(let posicion in imagenes){
      let imagen = imagenes[posicion];
      tabla += `<tr>
                <td style="width: 10%">`+dateFormat(fs.statSync('./imagenes/imagen1/'+imagen).birthtime, "dd/mm/yyyy" )+`</td>
                <td><img width="350px" src="data:image/jpeg;base64, `+fs.readFileSync(`./imagenes/imagen1/`+imagen).toString('base64')+`"/></td>
                <td><img width="350px" src="data:image/jpeg;base64, `+fs.readFileSync(`./imagenes/imagen2/`+imagen).toString('base64')+`"/></td>
                <td><img width="350px" src="data:image/jpeg;base64, `+fs.readFileSync(`./imagenes/resultado/`+imagen).toString('base64')+`"/></td>
                <td style="width: 20%">`+fs.readFileSync(`./imagenes/resultado/`+imagen.replace('png','txt')).toString('utf8')+`')</td>
                </tr>`;
  }

  res.send(createHtml(tabla));
});

app.post('/cypress', function (req, res) {
    js.ejecutarCypress();
});

reload(app);
