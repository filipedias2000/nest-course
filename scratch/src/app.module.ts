import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

/* A module is going to wrap up a controller.
Every application we create must have one 
module inside of it. */
@Module({ // This is a configuration object {}
    controllers: [AppController]
 }) 
 export class AppModule {}