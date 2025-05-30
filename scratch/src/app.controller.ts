import { Controller, Get } from '@nestjs/common';

/* this is a decorator and it's telling
Nest we are trying  to create a class that is going
to serve as a controller inside of our application. */
@Controller('/app') 
export class AppController {
    @Get('/asdf')
    getRootRoute() {
        return 'hi there!';
    }

    @Get('/bye')
    getByeThere() {
        return 'bye there!';
    }
}