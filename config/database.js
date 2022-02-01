//Llamado de librerias externas.
const mongoose = require('mongoose');

//Proceso para exportar conexión y creación a base de datos MongoDB.
const dbName = 'api_rest_nodejs';

module.exports = {
	connect: () => mongoose.connect('mongodb://localhost/' + dbName), 
	dbName,
	connection: ()=> {
		if(mongoose.connection)
			return mongoose.connection;
		return this.connect();
	}
}