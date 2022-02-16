import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    UseFilters,
  } from '@nestjs/common';
  import { AllExceptionFilter } from 'src/libs/filters/all-exception.filters';
  import { UserCreateDto, UserUpdateDto, UserLoginDto } from 'src/dtos/user.dto';
  import { FilterModel } from 'src/models/filter.model';
  import { UserModel } from 'src/models/user.model';
import { LoginService } from './login.service';
  
  
  @Controller('login')
  // custom filter exception handler declared here
  //@UseFilters(AllExceptionFilter)
  export class LoginController {
    constructor(private loginService: LoginService) {}
  
    @Post()
    async createUser(@Body() body: UserLoginDto): Promise<UserModel> {
      return await this.loginService.loginUser(body);
    }
  
   
  }
  