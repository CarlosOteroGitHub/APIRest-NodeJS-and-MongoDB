//Llamado de librerias externas.
var express = require('express');
let router = express.Router();

//Llamado del archivo controlador con las funciones CRUD asignadas a cada petición HTTP.
const peliculaController = require('../controllers/PeliculaController')

//Rutas que realizan busquedas generales.
router.route('/')
	//Petición HTTP GET para obtener todos los registros del modelo Pelicula.
	.get(peliculaController.show)
	//Petición HTTP POST para insertar un registro en el modelo Pelicula.
	.post(peliculaController.create)

//Rutas que realizan una busqueda individual mediante ID.
router.route('/:id')
	//Petición HTTP GET para obtener los datos de un registro del modelo Pelicula por medio del ID.
	.get(peliculaController.find)
	//Petición HTTP PUT para actualizar un registro en el modelo Pelicula mediante su ID.
	.put(peliculaController.update)
	//Petición HTTP DELETE para eliminar un registro en el modelo Pelicula mediante su ID.
	.delete(peliculaController.destroy)

module.exports = router;