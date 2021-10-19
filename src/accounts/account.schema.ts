import * as uuid from 'uuid';
import { Schema } from 'mongoose';

export const AccountSchema = new Schema({
  _id: {
    type: String,
    default: uuid.v4,
  },
  accountNumber: {
    type: String,
    required: false,
  },
  document: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
});
