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
       
      }
})

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {

  
  return await bcrypt.compare(enteredPassword, this.password);
};

// hassing password before create user
userSchema.pre('save', async function (next) {

  const user = this; 

  user.password = await bcrypt.hash(
    user.password,10
  );

  next();
});

export const UserModel = model('User', userSchema);