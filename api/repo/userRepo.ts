import { UserDocument } from "../bd/interface/userModel";
import User from "../bd/interface/userModel";

export default class UserRepository{
    async createUser (newUser: UserDocument): Promise<UserDocument>{
        return User.create(newUser)
    }

    async getAll(): Promise<UserDocument[]>{
        return User.find()
    }

    async getID (id: string): Promise<UserDocument>{
        return User.findOne({ _id: id })
    }

    async updateName (id:string, user: UserDocument): Promise<UserDocument>{
        return User.findByIdAndUpdate(id,user,{new:true})
    }

    async deleteUser(id: string): Promise<void>{
        return User.findByIdAndDelete(id)
    }
}