import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Cursor, WriteResult } from 'rethinkdb';
import { Test } from '@nestjs/testing';

@Injectable()
export class TestService {
  constructor(private db: DatabaseService) {}

  getTests(): Promise<Cursor> {
    return this.db
      .getTestTable()
      .run(this.db.getConnection());
  }

  getTest(id: string): Promise<{}> {
    return this.db
      .getTestTable()
      .get(id)
      .run(this.db.getConnection());
  }

  addTest(test: Test) {
    return this.db
    .getTestTable()
    .insert(test)
    .run(this.db.getConnection());
  }

  updateTest(id: string, testUpdate: Test): Promise<WriteResult> {
    return this.db
      .getTestTable()
      .get(id)
      .update(testUpdate)
      .run(this.db.getConnection());
  }

  deleteTest(id: string): Promise<WriteResult> {
    return this.db
      .getTestTable()
      .get(id)
      .delete()
      .run(this.db.getConnection());
  }

}
