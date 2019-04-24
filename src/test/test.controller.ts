import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { TestService } from './test.service';
import { Test } from '@nestjs/testing';

@Controller('test')
export class TestController {
  constructor(private test: TestService) {}

  @Get('')
  async getTests() {
    try {
      const tests = await this.test.getTests();
      return { tests: await tests.toArray()};
    } catch (error) {
      return error;
    }
  }

  @Get(':id')
  async getTest(@Param('id') id: string) {
    try {
      return await this.test.getTest(id);
    } catch (error) {
      return error;
    }
  }

  @Post()
  async addTest(@Body() test: Test) {
    try {
      return await this.test.addTest(test);
    } catch (error) {
      return error;
    }
  }

  @Put(':id')
  async updateTest(@Param('id') id: string, @Body() testUpdate: Test) {
    try {
      return await this.test.updateTest(id, testUpdate);
    } catch (error) {
      return error;
    }
  }

  @Delete(':id')
  async deleteTest(@Param('id') id: string) {
    try {
      return await this.test.deleteTest(id);
    } catch (error) {
      return error;
    }
  }

}
