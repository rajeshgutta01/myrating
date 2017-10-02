import Sequelize from 'sequelize';

class Rating {
  constructor (db) {
    this.db = db;

    return this.db.define('ratings', {
      movie_id: {
        type: Sequelize.STRING,
      },
      rating: {
        type: Sequelize.FLOAT
      }
    }, {
      freezeTableName: true // Model tableName will be the same as the model name
    });
  }
}

export default Rating;
