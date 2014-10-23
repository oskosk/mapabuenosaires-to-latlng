mapabuenosaires-to-latlng
=========================

Librería javascript que convierte coordenadas de proyección [Buenos Aires Gauss Krügger](https://recursos-data.buenosaires.gob.ar/ckan2/proyecciones-gkba.pdf) a latitud longitud (WGS84).

##Uso

###Incluir el script minificado

```html
<script src="https://oskosk.github.io/mapabuenosaires-to-latlng/dist/mapabuenosaires-to-latlng.js"></script>
``` 

###Pasándole un x e y 

Es decir, pasándole unidades en metros.

```html
<script>
  var x = 102750;// longitud (aunque en esta proyección no se puede hablar de longitud)
  var y = 101750;// latitud (aunque en esta proyección no se puede hablar de latitud)
  var center = mapaBuenosAiresToLatLng(x, y);
  console.log(center);
  // Object {lat: -34.61272133494985, lon: -58.43331717987316}

</script>
```

###Pasándole un OpenLayers.LonLat

Es decir, pasándole unidades en metros.

```html
<script>
  var center = new OpenLayers.LonLat(102750, 101750)
  var center = mapaBuenosAiresToLatLng(center);
  console.log(center);
  // Object {lat: -34.61272133494985, lon: -58.43331717987316}
</script>
```

###Pasándole el centro de un mapa creado con la API de Mapa Buenos Aires

Es decir, pasándole el OpenLayers.LonLat que se obtiene como return de `miMapa.api.getCenter()`.

```html
<script>
  var miMapa = new usig.MapaInteractivo('mapa', {
    rootUrl: '../',
    zoomBar: false,
  });
  var center = mapaBuenosAiresToLatLng(miMapa.api.getCenter());
  console.log(center);
    // Object {lat: -34.61272133494985, lon: -58.43331717987316}

</script>
```

##Dependencias

Esta librería depende de:

* OpenLayers (ya que el mapa interactivo de Buenos Aires v3 utiliza OpenLayers como librería de mapas).

Esta dependencia no es problema ya que al utilizar la API de Mapa buenos Aires, OpenLayers está incluido de manera predeterminada.

##Proyección y Sistema de referencia utilizado en el Mapa Interactivo de Buenos Aires

La descripción de este sistema de referencia la podés encontrar en:

https://recursos-data.buenosaires.gob.ar/ckan2/proyecciones-gkba.pdf

El código Proj4 que estoy utilizando es:

```
+proj=tmerc +lat_0=-34.629269 +lon_0=-58.4633 +k=0.9999980000000001 +x_0=100000 +y_0=100000 +ellps=intl +units=m +no_defs
```

y lo uso de esta manera:

```js
Proj4js.defs["EPSG:221951"] = "+proj=tmerc +lat_0=-34.629269 +lon_0=-58.4633 +k=0.9999980000000001 +x_0=100000 +y_0=100000 +ellps=intl +units=m +no_defs";
```


##License

Distributed under the MIT license.