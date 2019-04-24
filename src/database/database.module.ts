import { Module } from '@nestjs/common';
import { DatabaseProvider } from './database.provider.';
import { DatabaseService } from './database.service';

@Module({
  imports: [],
  controllers: [],
  providers: [DatabaseProvider, DatabaseService],
  exports: [DatabaseProvider, DatabaseService],
})
export class DatabaseModule {}
