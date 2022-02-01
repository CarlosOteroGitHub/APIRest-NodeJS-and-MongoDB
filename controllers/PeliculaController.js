//Llamado del archivo donde se almacenan los modelos de la base de datos.
const Pelicula = require('../models/Pelicula');

//Función utilizada para realizar las busquedas individuales al modelo Pelicula mediante un ID. En postman escribir: http://localhost:3000/peliculas/[_id] con GET.
function find(req, res, next){
	Pelicula.findById(req.params.id)
	.then((data) => {
		res.json(data);
		next();
	}).catch(err => {
		console.log(err);
		next(err);
	});
}

//Función para listar los registros de la base de datos MongoDB. En postman escribir: http://localhost:3000/peliculas con GET.
function show(req, res){
	Pelicula.find({})
	.then((data) => {
		res.json(data);
	}).catch(err => {
		console.log(err);
		res.json(err);
	});
}

//Función para insertar un registro en el modelo Pelicula de la base de datos MongoDB. En postman escribir: http://localhost:3000/peliculas con POST.
function create(req, res){
	Pelicula.create({
		name: req.body.name,
		anio: req.body.anio,
		director: req.body.director,
		gano_oscar: req.body.gano_oscar
	}).then((data) => {
		res.json(data);
	}).catch(err => {
		console.log(err);
		res.json(err);
	});
}

//Función para actualizar un registro de la base de datos MongoDB mediante un ID. En postman escribir: http://localhost:3000/peliculas/[_id] con PUT.
function update(req, res){
	let attributes = ['name','anio','director','gano_oscar'];
	let peliculaParams = {};
	attributes.forEach(attr => {
		if(Object.prototype.hasOwnProperty.call(req.body, attr))
			peliculaParams[attr] = req.body[attr];
	})

	Pelicula.findOneAndUpdate({'_id': req.params.id}, peliculaParams, {new: true})
	.then((data) => {
		res.json(data)
	}).catch(err => {
		console.log(err);
		res.json(err);
	})
}

//Función para eliminar un registro de la base de datos MongoDB mediante un ID. En postman escribir: http://localhost:3000/peliculas/[_id] con DELETE.
function destroy(req, res){
	Pelicula.remove({'_id': req.params.id})
	.then((data) => {
		res.json(data);
	}).catch(err => {
		console.log(err);
		res.json(err);
	})
}

module.exports = {find, show, create, update, destroy};