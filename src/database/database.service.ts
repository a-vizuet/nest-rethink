import { Injectable, Inject } from '@nestjs/common';
import * as rethink from 'rethinkdb';

@Injectable()
export class DatabaseService {
  private connection: rethink.Connection;
  private test: rethink.Table;

  constructor(@Inject('RethinkProvider') connection) {
    this.connection = connection;
    this.test = rethink.db('test').table('test');
  }

  getConnection(): rethink.Connection {
    return this.connection;
  }

  getTestTable(): rethink.Table {
    return this.test;
  }

}
