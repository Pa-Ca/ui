# Pa'Ca UI

Biblioteca de componentes para interfaces del producto Pa'Ca

## Configuración

### Variables de entorno

```bash
# .env
TARGET_ENV=<production|development>
VITE_GOOGLE_MAPS_API_KEY=<key>
```

### Versión de node

Este proyecto utiliza *node lts/hydrogen*. Por simplicidad se recomienda 
utilizar el paquete [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
para administrar las versiones de node.

```sh
$ nvm install # Si se utiliza el proyecto por primera vez
$ nvm use # Establece a la versión de node del proyecto para su uso
```

*Se recomienda utilizar el comando **nvm use** cada que se inicie un 
desarrollo.*

## Ejecución

### Storybook

```
$ npm ci
$ npm run storybook
```
Storybook es ejecutado en http://localhost:6006

### Docker

```bash
$ docker compose up --build -d
```