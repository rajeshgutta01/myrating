import Database from '~/src/lib/database';

import Sequelize from 'sequelize';

const sequelize = new Sequelize('myrating', 'root', '', {
      host: '127.0.0.1',
      dialect: 'mysql'
    });

export const Rating = sequelize.define('ratings', {
  movie_id: {
    type: Sequelize.STRING,
  },
  rating: {
    type: Sequelize.FLOAT
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

export default Rating;