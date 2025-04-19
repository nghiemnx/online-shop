/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  ValidationPipe,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { QueryFailedFilter } from './common/filters/query-failed.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

class SecretKeyMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const swaggerPaths = ['/api', '/health'];
    if (swaggerPaths.some((path) => req.url.startsWith(path))) {
      return next();
    }

    const secretKey = req.headers['x-secret-key'];
    const expectedKey = process.env.SECRET_KEY || '2101998';

    if (secretKey !== expectedKey) {
      throw new HttpException('Permission denied!', HttpStatus.UNAUTHORIZED);
    }

    next();
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Apply the global exception filter
  app.useGlobalFilters(new QueryFailedFilter());

  // Apply the secret key middleware
  app.use(new SecretKeyMiddleware().use);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip properties not in the DTO
      forbidNonWhitelisted: true, // Throw an error for unknown properties
      transform: true, // Automatically transform payloads to DTO instances
    }),
  );

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Online Shop API')
    .setDescription('API documentation for the Online Shop application')
    .addSecurity('apiKey', {
      type: 'apiKey',
      name: 'x-secret-key',
      in: 'header',
      description: 'Enter your secret key',
    })
    .addSecurityRequirements('apiKey')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
