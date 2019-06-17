# Laboratorio de virtualizacion en Docker

En el siguiente laboratorio consta de una aplicacion CRUD sobre peliculas. Esta aplicacion esta desarrollada en NodeJS y utilizando una base de datos en MYSQL.

## Getting Started

Las siguiente instrucciones ayudaran a crear la imagen correr en la maquina local y posteriormente en una instancia de aws.

### Prerequisites

*Docker
*Node
*NPM
*Git

### Installing

1.Instalar todos los prerequisitos.
2.Hacer una copia del repositorio.

El proyecto contendra los siguientes archivos

```
app.js
bin
Dockerfile
latest.tar
node_modules
package.json
package-lock.json
public
README.md
routes
template.json
views
```

El archivo Dockerfile contiene los datos necesarios para la creacion de la imagen en Docker.
Este archivo especifica utilizar node version 10, el directorio en el contenedor, el archivo de node con las dependencias, el puerto y metodo de ejecucion.

```
FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
```

Creamos el contenedor con el siguiente comando

```
docker build -t node-app .
```

Para exportar la imagen podemos utilizar el siguiente comando
```
sudo docker save ubuntu > ubuntu_save.tar
```

## Running the tests

Ejecutamos el contendor en nuestra maquina local para hacer la prueba

```
docker run -it -p 3000:3000 node-app
```

## Deployment

Para hacer un deploy en aws se debe de registrar la aplicacion en aws se debe de utilizar AWS Elastic Container Registries.
Para esto se debe de 


