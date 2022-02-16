import { IsNotEmpty, Length, IsEmail, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @IsNotEmpty()
  @Length(2, 30)
  @ApiProperty()
  fullName: string;
  @ApiProperty()
  img: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  @IsEmail()
  mail: string;
  @IsNotEmpty()
  @Length(6, 13)
  @ApiProperty()
  gsm: string;

  @Length(5, 25)
  @ApiProperty()
  taxNum: string;

  @Length(6, 25)
  @ApiProperty()
  companyName: string;
  //   @IsNotEmpty()
  //   @Length(6,45)
  //   @ApiProperty()
  //   addressFirst:string;
  //   @IsNotEmpty()
  //   @Length(6,45)
  //   @ApiProperty()
  //   addressTwo:string;
  //   @IsNotEmpty()
  //   @Length(6,45)
  //   @ApiProperty()
  //   addressThree:string;
}

// tslint:disable-next-line:max-classes-per-file
export class UserUpdateDto {
  @IsNotEmpty()
  @Length(2, 30)
  @ApiProperty()
  fullName: string;
  @ApiProperty()
  img: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  @IsEmail()
  mail: string;
  @IsNotEmpty()
  @Length(6, 13)
  @ApiProperty()
  gsm: string;

  @Length(5, 25)
  @ApiProperty()
  taxNum: string;

  @Length(6, 25)
  @ApiProperty()
  companyName: string;

  @Length(6, 45)
  @ApiProperty()
  addressFirst: string;

  @Length(6, 45)
  @ApiProperty()
  addressTwo: string;

  @Length(6, 45)
  @ApiProperty()
  addressThree: string;
}

// tslint:disable-next-line:max-classes-per-file
export class UserLoginDto {
  @ApiProperty()
  mail: string;
  @ApiProperty()
  password: string;
}
