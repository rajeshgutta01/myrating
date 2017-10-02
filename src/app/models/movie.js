import Sequelize from 'sequelize';

class Movie {
  constructor (db) {
  	this.db = db;

  	return this.db.define('movies', {
		  name: {
		    type: Sequelize.STRING,
		  },
		  release_date: {
		    type: Sequelize.STRING
		  }
		}, {
		  freezeTableName: true // Model tableName will be the same as the model name
		});
  }  
}

export default Movie;
