import {Document, Schema,model} from 'mongoose'
export interface IUser {
    // _id : Schema.Types.ObjectId,
    name: string,
    password: string ,
    email: string,
    mobile:number,
    about : string,
    address :string,
    profile_picture :string,
    followerCount :number ,
    favCount :number ,
}


export interface IUserModel extends IUser,Document {}


let UserSchema = new Schema({
    _id : {
      type : Schema.Types.ObjectId,
      auto : true,
      required : true
    },
    name: {
      type: String,
      required: 'Please provide the username'
    },
    password: {
      type: String,
      required: 'Please provide the password'
    },
    email: {
      type: String,
      required: 'Please provide the email'
    },
    mobile: {
      type: Number,
      required: 'Please provide the mobile number'
    },
    about : {
        type : String
    },
    address : {
        type : [String]
    },
    profile_picture : {
      type : String
    },
    favCount: {
        type : Number
    },
    followerCount :{
        type : Number
    },
  },{
    timestamps : true
  });



export const User = model<IUserModel>('User', UserSchema)