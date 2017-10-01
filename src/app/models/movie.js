import Database from '~/src/lib/database';

import Sequelize from 'sequelize';

const sequelize = new Sequelize('myrating', 'root', '', {
      host: '127.0.0.1',
      dialect: 'mysql'
    });

export const Movie = sequelize.define('movie', {
  name: {
    type: Sequelize.STRING,
  },
  release_date: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

export default Movie;