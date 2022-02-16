import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface UserModel extends Document {
  id: string;
  fullName: string;
  mail: string;
  gsm: string;
  password: string;
  img: string;
  isVerified: boolean;
  isBanned: boolean;
  isActive: boolean;
  isProvider: boolean;
  taxNum: string;
  companyName: string;
  addressFirst: string;
  addressTwo: string;
  addressThree: string;
}

export const UserSchema = new mongoose.Schema({
  fullName: { type: String, requried: [true, 'Full Name İs Required!'] },
  mail: { type: String, requried: [true, 'Mail is Required!'] },
  gsm: { type: String, requried: [true, 'Gsm is Required!'] },
  password: { type: String, requried: [true, 'Password is Required!'] },
  img: { type: String },
  isVerified: { type: Boolean, default: false },
  isBanned: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  taxNum: { type: String, default: '' },
  companyName: { type: String, default: '' },
  addressFirst: { type: String, default: '' },
  addressTwo: { type: String, default: '' },
  addressThree: { type: String, default: '' },
});
