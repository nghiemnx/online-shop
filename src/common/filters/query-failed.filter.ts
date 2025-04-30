import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class QueryFailedFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = HttpStatus.BAD_REQUEST;

    let message = '';
    let errorMsg = '';
    if (exception.message.includes('Duplicate entry')) {
      message = 'Duplicate entry detected';
      errorMsg = exception.message;
    } else {
      message = 'Database query failed';
      errorMsg = 'Bad Request';
    }

    response.status(status).json({
      statusCode: status,
      message,
      error: errorMsg,
    });
  }
}
