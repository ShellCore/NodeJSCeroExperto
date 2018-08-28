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

### Servicios

- [Open Wheather Map](https://openweathermap.org/): Servicio REST para la consulta del clima
- [Google Cloud Platorm](https://console.cloud.google.com/google/maps-apis/overview): Servicios de ubicación de Google
- [Heroku](https://www.heroku.com/): Servicio para desplegar proyectos NodeJS

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
6. Web Server

## Notas

Para los siguientes ejercicios, ejecutar el siguiente comando, para que las librerías de node se descarguen

```sh
$ npm install
```

3. Bases
4. Lista de tareas por hacer
5. Clima del 
6. Web Server

Para ejecutar el ejercicio 6, por la configuración en los scripts de package.json, ejecutar la siguiente línea

```sh
$ npm start
```

Para ejecutar con nodemon el ejercicio 6, por la configuración en los scripts de package.json, ejecutar la siguiente línea

```sh
$ npm run nodemon
```