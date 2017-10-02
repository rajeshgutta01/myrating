import Config from 'konfig';
import Sequelize from 'sequelize';

const configure = Config().connections;

class Database {
  static client = null;

  static mysqlConnect () {
    if (process.env.NODE_ENV == 'development') {
      Database.client = new Sequelize(configure.Database.db_name, configure.Database.user_name, configure.Database.password, {
        host: configure.Database.host_name,
        dialect: 'mysql'
      });
    } else {
      Database.client = new Sequelize(process.env.RDS_DATABASE_NAME, process.env.RDS_USERNAME, process.env.RDS_PASSWORD, {
        host: process.env.RDS_HOSTNAME,
        dialect: 'mysql'
      });
    }
    console.log('Connected to database >', Database.client.config.database, '< has been established!');
  }

  static connect () {
    return Database.mysqlConnect();
  }
}

export default Database;
