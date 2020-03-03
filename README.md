# Presentado por:
  * Ingrid Dayana Romero Melgarejo
  * Deisy Tatiana Macias Cardenas
  
# ResembleJS

* **¿Qué información puedo obtener de una imagen al usar resembleJS y que significado tiene cada uno de los componentes de la respuesta?.**

La información que se puede obtener de una imagen es la siguiente:

* RGBA: Obtiene los valores RGBA que tiene la imagen.
* Blanco y Negro: Obtiene la cantidad de blancos y negros que tiene la imagen.
* Brillo: Obtiene el brillo de la imagen.

* **¿Qué información puedo obtener al comparar dos imagenes?**

Muestra las diferencias encontradas entre las dos imagenes a comparar, este genera una nueva imagen con las áreas que tienen diferencia  color amarillo o fucsia. ResembleJS cuenta con varios algoritmos de comparación, el cual se puede seleccionar dependiendo de la prueba que se desee reaizar. Cada tipo de algoritmo imprime un porcentaje de diferencias halladas entre las imagenes comparadas.

* **¿Qué opciones se pueden seleccionar al realizar la comparación ?**

Las opciones que se pueden seleccionar son las siguientes:

**Tipos de algoritmo**

* No ignorar nada
* Ignorar menos
* Ignorar colores
* Ignorar antialiasing
* Ignorar alpha

**Tamaño de la imagen:** Se puede cambiar al tamaño original o escalar al mismo tamaño. <br/>
**Color diferencias:** Se puede seleccionar el color con el que muestra las diferencias encontradas, puede ser amarillo o fucsia. <br/>
**Color similitudes.** Estan las opciones de Opaco y transparante, con ellos se evidencia las areas de la imagen que si concuerdan. <br/>
**Establecer cuadro delimitador:** Delimita el área del cuadro que se quiere comparar. <br/>
**Establecer cuadro ignorado:** Delimita el área del cuadro que no se quiere comparar.<br/>
**Establecer color ignorado:** Indica un color en especifico que desea ser ignorado.<br/>
