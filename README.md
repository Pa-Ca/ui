# Pa'Ca UI
Biblioteca de componentes para interfaces del producto Pa'Ca

## Inicialización
```
$ npm install
$ echo 'TARGET_ENV=production' > .env
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
$ npm -i ../ui/[package-name]-[package-version].tgz
```

Este comando agrega a paca-ui como dependencia del proyecto en el package.json

## Importar componentes
Utilizando el elemento Button por defecto de Storybook
```
...
import { Button } from 'paca-ui/'
...
<Button label="Button Here" primary/>
...
```