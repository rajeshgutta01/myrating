import Sequelize from 'sequelize';

class Database {
  static client = null;

  static mysqlConnect () {
    Database.client = new Sequelize('myrating', 'root', '', {
      host: '127.0.0.1',
      dialect: 'mysql'
    });
    console.log('Connected to database >', Database.client.config.database, '< has been established!');
  }

  static connect () {
    return Database.mysqlConnect();
  }
}

export default Database;
