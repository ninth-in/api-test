import { UserDocument } from "../bd/interface/userModel";
import UserRepository from "../repo/userRepo";

export default class UserService{

    private readonly userRepository: UserRepository
    constructor () {
    this.userRepository = new UserRepository()
    }

    async createUser (newUser: UserDocument) : Promise <UserDocument>{
        return this.userRepository.createUser(newUser)
    }

    async getAll(): Promise<UserDocument[]>{
        return this.userRepository.getAll()
    }

    async getID(id: string): Promise<UserDocument>{
        const user: UserDocument = await this.userRepository.getID(id)
        return user
    }

    async updateName(id: string, user: UserDocument): Promise<UserDocument>{
        return this.userRepository.updateName(id,user)
    }

    async updateUser(id: string, user: UserDocument): Promise<UserDocument>{
        return this.userRepository.updateUser(id,user)
    }

    async deleteUser(id: string): Promise<void>{
        return this.userRepository.deleteUser(id)
    }

}