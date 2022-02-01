//Llamado de librerias externas.
const mongoose = require('mongoose');

//Estructrua del modelo/colección Pelicula.
let peliculaSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},

	anio: {
		type: Number	
	},

	director: {
		type: String
	},

	gano_oscar: {
		type: Boolean,
		default: false
	}
});

let Pelicula = mongoose.model('Pelicula', peliculaSchema);

module.exports = Pelicula;