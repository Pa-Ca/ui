# Pa'Ca UI
Biblioteca de componentes para interfaces del producto Pa'Ca

## Inicialización
```
$ npm install
$ echo 'TARGET_ENV=production' > .env
```

Si ocurre el error :

```
code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR!
npm ERR! While resolving: rollup-plugin-terser@7.0.2
npm ERR! Found: rollup@3.9.1
...
```

Correr los siguientes comandos:

```
$ npm uninstall —legacy-peer-deps rollup-plugin-terser
$ npm i @rollup/plugin-terser --save-dev  --legacy-peer-deps
```


## Storybook
```
$ npm run storybook
```




Ejecuta Storybook en el navegador

## Rollup build
```
$ npm run build
```

Construye el paquete con los componentes de Storybook en la raíz del proyecto. 
Tiene la forma:

`[package-name]-[package-version].tgz`

## Importar en proyecto externo
```
$ git clone git@github.com:Pa-Ca/ui.git
$ cd <external-project-folder>
$ npm i ../ui/[package-name]-[package-version].tgz
```

Este comando agrega a paca-ui como dependencia del proyecto en el package.json

## Importar componentes
Utilizando el elemento Button por defecto de Storybook
```
...
import { Button } from 'paca-ui'
...
<Button label="Button Here" primary/>
...
```

***

### Referencias

* [Rollup tutorial](https://kaizenpanda.com/posts/2021-02-18-rollup/)
* [Rollup & React](https://stackoverflow.com/questions/59668493/how-to-create-a-privately-shared-component-library-which-can-be-used-across-mult)
* [Rollup Imports](https://stackoverflow.com/questions/53722817/using-rollup-for-a-react-component-library)
