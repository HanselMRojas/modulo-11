# Digito de verficacion DIAN
Este modulo sireve para calcular el digito de verificación de un NIT o RUT de la entidad Tributaria __DIAN__ en __Colombia__. 

### Ejemplo Básico
El siguiente ejemplo solo es de uso didáctico. Tomamos como ejemplo un NIT empresarial econtrado en [esta fuente:](http://190.27.245.106/BLA/resoluciones/RESOLUCIONES%202009/4698.pdf)

```javascript
	var modulo = require('modulo-11')
	var nit = '830091684' // NIT: Cocacola FEMSA Colombia S.A

	modulo.calc(nit) // Esto retorna 8
```

## TODO
- Validar numeros separados por puntos, comas, espacios y guiones.
- Crear funcion helper que ayude a formatear el NIT de distintas maneras.
- Crear Pruebas Unitarias. 
- Publicar en NPM.

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