# Digito de verficacion DIAN
Este modulo sireve para calcular el digito de verificación de un NIT o RUT de la entidad Tributaria __DIAN__ en __Colombia__. 

### Ejemplo Básico
El siguiente ejemplo solo es de uso didáctico. Tomamos como ejemplo un NIT empresarial econtrado al azar. En este caso el de Cocacola FEMSA Colombia.

```javascript
	var modulo = require('modulo-11');
	var nit = '830.091.684'; // NIT: Cocacola FEMSA Colombia S.A
	var nitConLineas = '830-091-684';

	modulo.calc(nit); // 8

	/** ES2015: */
	var nitConFormato = `${nit}-${modulo.calc(nit)}`; //  830.091.684-8

	/** ES5: */
	var nitConFormato = nitConLineas + '-' + modulo.calc(nit); //  830-091-684-8

	/** Helper Format */
	var basico = modulo.format(nit) //  '830091684-8';
```

Tener en cuenta que las funciones __modulo.calc()__ y __modulo.format()__ adminten tanto numeros enteros como strings. 

## TODO
- Crear Pruebas Unitarias. 
- Crear builds para browser.
- Publicar en algún cdn.

# Licencia
Copyright 2016 Hansel Morales

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.