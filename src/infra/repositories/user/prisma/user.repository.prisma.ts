import { PrismaClient } from "@prisma/client";
import { User } from "../../../../domains/User/entity/user";
import { UserGateway } from "../../../../domains/User/gateway/user.gateway";

export class UserRepositoryPrisma implements UserGateway{

    private constructor( private readonly prismaClient: PrismaClient){}

    public static create(prismaClient: PrismaClient){
        return new UserRepositoryPrisma(prismaClient);
    }

    public async save(user: User): Promise<void> {
        const data = {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            money: user.money,
            cpf_cnpj: user.cpf_cnpj,
            endereco: user.endereco,
            user_type: user.userType
        }

        await this.prismaClient.usuario.create({data})
    }
    public async list(): Promise<User[]> {
        const users = await this.prismaClient.usuario.findMany();

        const userList = users.map((u)=>{
            const user = User.with({
                id: u.id,
                name: u.name,
                email: u.email,
                password: u.password,
                money: u.money,
                cpf_cnpj: u.cpf_cnpj,
                endereco: u.endereco,
                user_type: u.user_type as 'user' | 'lojista'
            })
            return user;
        })

        return userList;
    }
    
}