import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface CategoryModel extends Document {
  id: string;
  name: string;
  img: string;
  showHome: boolean;
  isSubcategory: boolean;
  mainCategory: string;
  isActive: boolean;
}

export const CategorySchema = new mongoose.Schema({
  name: { type: String, requried: [true, 'Full Name İs Required!'] },
  img: { type: String, default: '' },
  showHome: { type: String, defaut: '' },
  isSubcategory: { type: Boolean, default: false },
  mainCategory: { type: String, defaut: '' },
  isActive: { type: Boolean, default: true },
});
