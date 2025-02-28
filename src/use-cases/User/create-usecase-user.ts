import { CreateUserInputDTO } from "../../DTOs/create-user-input-DTO";
import { CreateUserOutputDTO } from "../../DTOs/create-user-output-DTO";
import { UseCase } from "../usecase";
import { UserGateway } from '../../domains/User/gateway/user.gateway';
import { User } from "../../domains/User/entity/user";

export class CreateUserUseCase implements UseCase<CreateUserInputDTO, CreateUserOutputDTO> {
    
    private constructor(private readonly userGateway: UserGateway){}
    
    public static create(userGateway: UserGateway): CreateUserUseCase {
        return new CreateUserUseCase(userGateway);
    }

    public async execute({cpf_cnpj,email,endereco,money,name,password,user_type}: CreateUserInputDTO): Promise<CreateUserOutputDTO> {
        const aUser = User.create(
            name,
            email,
            cpf_cnpj,
            endereco,
            password,
            money,
            user_type 
        );
        
        await this.userGateway.save(aUser);

        const output = this.presentOutput(aUser);

        return output;
       
    }


    private presentOutput(user: User): CreateUserOutputDTO {
        const output : CreateUserOutputDTO = {
            id: user.id,
            name: user.name,
            email: user.email,
            user_type: user.userType 
        }

        return output
    }
}