import * as uuid from 'uuid';
import { Schema } from 'mongoose';

import { MovementTypeEnum } from './enums/movement-type.enum';

export const MovementSchema = new Schema({
  _id: {
    type: String,
    default: uuid.v4,
  },
  type: {
    type: String,
    enum: MovementTypeEnum,
  },
  amount: {
    type: Number,
    required: false,
  },
  currentBalance: {
    type: Number,
    required: false,
  },
});
