import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LoggerService extends Logger {
  log(message: string): void {
    super.log(message);
  }
  error(message: string): void {
    super.error(message);
  }
}
