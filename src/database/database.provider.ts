import * as rethink from 'rethinkdb';
import { LoggerService } from '../logger/logger.service';

export const DatabaseProvider = {
  provide: 'RethinkProvider',
  useFactory: async () => {
    LoggerService.log('Intentando conectar con la base de datos!');
    try {
      const connection = await rethink.connect({ host: 'localhost', port: 28015 });
      LoggerService.log('Conexión con la base de datos establecida!');
      return connection;
    } catch (error) {
      LoggerService.error('Error al conectar con la base de datos!');
    }
  },
};
