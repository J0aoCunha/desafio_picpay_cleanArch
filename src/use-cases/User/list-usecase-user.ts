import { User } from "../../domains/User/entity/user";
import { UserGateway } from "../../domains/User/gateway/user.gateway";
import { ListUserInputDTO } from "../../DTOs/list-user-input-DTO";
import { ListUserOutputDTO } from "../../DTOs/list-user-output-DTO";
import { UseCase } from "../usecase";

export class ListUserUseCase implements UseCase<ListUserInputDTO, ListUserOutputDTO> {
    
    private constructor(private readonly userGateway: UserGateway){}
  
    public static create(userGateway: UserGateway): ListUserUseCase {
        return new ListUserUseCase(userGateway);
    }

    public async execute(input: void): Promise<ListUserOutputDTO> {
        
        const aUsers = await this.userGateway.list();

        const output = this.presentOutput(aUsers);

        return output;

    }

    private presentOutput(users: User[]): ListUserOutputDTO {
       
        return {
            users: users.map((user) => {
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    money: user.money,
                    cpf_cnpj: user.cpf_cnpj,
                    user_type: user.userType,
                    endereco: user.endereco,
                }
            })
        }

    }

}