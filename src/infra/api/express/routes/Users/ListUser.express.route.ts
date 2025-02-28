import { Request, Response } from "express";
import { HttpMethod } from "../../../../../DTOs/http-method-DTO";
import { ListUserUseCase } from "../../../../../use-cases/User/list-usecase-user";
import { Route } from "../route";
import { ListUserOutputDTO } from "../../../../../DTOs/list-user-output-DTO";
import { ListUserResponseDTO } from "../../../../../DTOs/list-user-response-DTO";

export class ListUserRoute implements Route {

    private constructor(
         private readonly path:string, 
         private readonly method:HttpMethod,
         private readonly listUserService: ListUserUseCase
    ){}

    getPath(): string {
        return this.path
    }

    getMethod(): HttpMethod {
        return this.method
    }

    public static create(listUserService: ListUserUseCase){
        return new ListUserRoute(
            '/users', 
            HttpMethod.GET, 
            listUserService
        );
    }


    public getHandle(){
        return async (request: Request, response: Response) => {
            const output = await this.listUserService.execute();
            const responseBody = this.present(output); 

            response.status(200).json(responseBody).send();
        }
    }

    present(input: ListUserOutputDTO): ListUserResponseDTO {
        const response: ListUserResponseDTO = {
            users: input.users.map((user)=>(
                {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    cpf_cnpj: user.cpf_cnpj,
                    endereco: user.endereco,
                    money: user.money,
                    user_type: user.user_type
                }
            ))
        }

        return response;
    }
}