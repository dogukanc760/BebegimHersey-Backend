import {
  CacheModule,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthGuard } from 'src/libs/guards/auth.guard';
import { LibsModule } from 'src/libs/libs.module';
import { TokenMiddleware } from 'src/libs/middlewares/token.middleware';
import environment from 'src/environment/environment';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';

import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [
    CacheModule.register(),
    UserModule,
    LibsModule,

    MongooseModule.forRoot(environment.mongoUrl),

    LoginModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  
  }
}
