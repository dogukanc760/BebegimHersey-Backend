import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ResourceService } from 'src/libs/resource.service';
import { Model } from 'mongoose';
import { UserCreateDto, UserUpdateDto } from 'src/dtos/user.dto';

import { UserModel } from 'src/models/user.model';
import environment from 'src/environment/environment';

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0//P4$$w0rD';
const hashText = environment.hashText;

@Injectable()
export class UserService extends ResourceService<
  UserModel,
  UserCreateDto,
  UserUpdateDto
> {
  constructor(@InjectModel('User') useRMongo: Model<UserModel>) {
    super(useRMongo);
  }

  async convertToHash(value: string) {
    let hashPwd;
    await bcrypt.hash(`${hashText}${value}`, saltRounds).then(hash => {
      hashPwd = hash;
    });
    return await hashPwd;
  }

  async compareHashes(password, hashed) {
    const match = await bcrypt.compareSync(`${hashText}${password}`, hashed);
    return await match;
  }
}
