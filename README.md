# NodeJS

## Descripción

Este repositorio contiene todos los ejercicios del curso "Node: de Cero a Experto" que se encuentra en la plataforma Udemy. 

## Instalación

Las herramientas utilizadas son las siguientes:

- Visual Studio Code
	- Plugins
		- HTML CSS Support (ecmel)
		- JavaScript (ES6) code snippets (charalampos karypidis)
		- JS-CSS-HTML Formatter (lonefy)
		- typescript importer (pmneo)
- Postman
- Git
- NodeJS

Para la instalación de NodeJS en Linux:

```sh
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt install nodejs -y
```

## Otras herramientas

### Nodemon

Mantiene levantado el servicio mientras se realizan cambios en los programas, volviendo a ejecutar el código después de guardados los cambios.

```sh
$ sudo npm install -g nodemon
```

### Heroku

Servicio web para poder subor proyectos de NodeJS (hasta 5 simultáneos gratis).

```sh
$ sudo apt install snapd
$ sudo snap install --classic heroku
# Nota: requiere reiniciar el equipo, para poder verificar que en efecto se instaló
$ heroku -v
```

### MongoDB

Base de datos para la gestión de datos de las aplicaciones. Instrucciones para la instalación en Linux Mint 19 Cinnamon

```sh
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
$ echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
$ sudo apt-get install -y mongodb-org
```

Para iniciar el servicio, y verificar que en efecto se encuentra iniciado:

```sh
$ sudo service mongod start
```

Verificar que la siguiente línea aparezca en el log de MongoDB

```sh
# [initandlisten] waiting for connections on port 27017
$ cat /var/log/mongodb/mongod.log
```

### Robo 3t

Aplicación para la manipulación de la base de datos de MongoDB. ([Link a dirección de descarga](https://robomongo.org/))

### Servicios

- [Open Wheather Map](https://openweathermap.org/): Servicio REST para la consulta del clima
- [Google Cloud Platorm](https://console.cloud.google.com/google/maps-apis/overview): Servicios de ubicación de Google
- [Heroku](https://www.heroku.com/): Servicio para desplegar proyectos NodeJS
- [mLab](https://www.mlab.com): Servicio MongoDB en la nube (gratuito 500 MB)

## Ejercicios
1. Hola Mundo
2. Fundamentos
	a. Diferencia entre **Var** y **Let**
	b. Template literales
	c. Destructuración de objetos
	d. Funciones de flecha
	e. Callbacks
	f. Promesas
3. Bases
4. Lista de tareas por hacer
5. Clima del mundo
6. Web Server ([link al deploy en Heroku](https://dashboard.heroku.com/apps/shellcore-webpage))
7. Rest Server
8. Sockets
9. Chat

## Notas

Para los siguientes ejercicios, ejecutar el siguiente comando, para que las librerías de node se descarguen

```sh
$ npm install
```

3. Bases
4. Lista de tareas por hacer
5. Clima del 
6. Web Server
7. Rest Server

Para ejecutar el ejercicio 6, por la configuración en los scripts de package.json, ejecutar la siguiente línea

```sh
$ npm start
```

Para ejecutar con nodemon el ejercicio 6, por la configuración en los scripts de package.json, ejecutar la siguiente línea

```sh
$ npm run nodemon
```
