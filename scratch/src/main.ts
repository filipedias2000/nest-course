/* main.ts is going to be the first file that gets 
executed in any project. */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/* Usually this function is called bootstrap. It 
will run every time we start up our application */
async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    await app.listen(3000);
    /* app server listening on PORT: 3000 */
}
bootstrap();