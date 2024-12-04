import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const logger = new Logger('HTTP');

  app.use((req, res, next) => {
    const { method, url } = req;
    const start = Date.now();

    res.on('finish', () => {
      const elapsed = Date.now() - start;
      const { statusCode } = res;
      logger.log(`${method} ${url} ${statusCode} - ${elapsed}ms`);
    });

    next();
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
