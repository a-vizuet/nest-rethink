import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { DatabaseService } from '../database/database.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [TestController],
  providers: [TestService, DatabaseService],
  exports: [TestService],
  imports: [DatabaseModule],
})
export class TestModule {}
