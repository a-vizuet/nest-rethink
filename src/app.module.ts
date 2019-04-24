import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { LoggerModule } from './logger/logger.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [DatabaseModule, LoggerModule, TestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
