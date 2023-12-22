import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema=new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
      },
      password: {
        type: String,
        required: true,
        select: 0,
      }
})


userSchema.pre('save', async function (next) {

  const user = this; 

  user.password = await bcrypt.hash(
    user.password,10
  );

  next();
});

export const UserModel = model('User', userSchema);