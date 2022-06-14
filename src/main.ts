import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Configs. do class validator e do class transformer
  app.useGlobalPipes(new ValidationPipe());
  //Configs. do swagger
  const config = new DocumentBuilder()
  .setTitle('Steam Powered APP')
  .setDescription('Aplicação para a gestão de jogos em um aplicativo')
  .setVersion('1.0.0')
  .addTag('Status')
  .addTag('HomePage')
  .addTag('Genres')
  .addTag('Games')
  .addTag('User')
  .addTag('Favoritos')
  .addTag('Auth')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3333);
}
bootstrap();
