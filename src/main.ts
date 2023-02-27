import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configura el prefijo api/v2 para todas las rutas, es decir, todas las rutas tendrán el prefijo api/v2: "api/v2/pokemons"
  app.setGlobalPrefix('api/v2');
  await app.listen(3000);
}
bootstrap();
