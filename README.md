# App proyectos

_Aplicaci贸n ralizada con express, portal para la creaci贸n de proyectos particulares de un usuario_

## Contenido

_El proyecto contiene una rama ***dev*** que es la que contiene los ultimos features del proyecto, aqui encontraras todo lo necesario para correr dicho proyecto._


### Pre-requisitos 馃搵

_Crear una base de datos en mysql, puedes utilizaar servicios como ***XAMPP*** para la contrucci贸n de dicha base, te dejo un blog donde puedes encontrar como hacerlo
[guia para mysql en terminal](https://desarrolloweb.com/articulos/2408.php) asegurate de llegar a este punto_

```
mysql>
```

_Una vez all铆 ejecuta la base de datos que se encuentra en el directorio ***database/db.sql***, copia y pega el contenido este archivo en la terminal 
para crear la base de datos_

### Instalaci贸n 馃敡

_Navega desde la terminal a la carpeta donde tienes el proyecto y ejecuta_

```
npm install
```

_se instalaran todos las dependencias para poder correr el proyecto, luego ejecuta_

```
npm start
```

_Ya estas corriendo la aplicaci贸n, ve al navegador de tu preferencia y dirigete a_

```
localhost:3000
```

### Preview
_Esto es lo que veras en el navegador_
![](/preview.jpg)

## Construido con
* [Express](https://expressjs.com/) - El framework utilizado.
* [express-mysql-session](https://www.npmjs.com/package/express-mysql-session) - Dependencia para crear las sesiones en la base de datos.
* [bcrypt](https://www.npmjs.com/package/bcrypt) - Libreria para el hash en las contrase帽as.
* [express-handlebars](https://www.npmjs.com/package/express-handlebars) - Motor para la visualizaci贸n de vistas en express.
* [timeago.js](https://www.npmjs.com/package/timeago.js) - Libreria utilizada para formatear fechas.
* [passport](https://www.npmjs.com/package/passport) - Paquete para autenticar solicitudes, comptible con express.

## Autores
* **_Juan Correa_**

