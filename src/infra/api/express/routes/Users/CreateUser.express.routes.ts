import { Request, Response } from "express";
import { HttpMethod } from "../../../../../DTOs/http-method-DTO";
import { Route } from "../route";
import { CreateUserUseCase } from "../../../../../use-cases/User/create-usecase-user";
import { CreateUserInputDTO } from "../../../../../DTOs/create-user-input-DTO";
import { CreateUserResponseDTO } from "../../../../../DTOs/create-user-response-DTO";

export class CreateUserRoute implements Route{
    private constructor(
        private readonly path:string, 
        private readonly method:HttpMethod,
        private readonly createUserService: CreateUserUseCase
    ){}

    public static create(createUserService: CreateUserUseCase){
        return new CreateUserRoute(
            '/users', 
            HttpMethod.POST, 
            createUserService
        );}

   public  getHandle(){
        return async (request: Request, response: Response) =>{
            const {name, email, password, money, cpf_cnpj, endereco, user_type} = request.body;
            
            const input: CreateUserInputDTO = {
                name,
                email,
                password,
                money,
                cpf_cnpj,
                endereco,
                user_type
            }

            const output: CreateUserResponseDTO = await this.createUserService.execute(input);

            const responseBody = this.present(output);

            response.status(201).json(responseBody).send();
        }
    } 

    private present(input: CreateUserResponseDTO): CreateUserResponseDTO{
        const response = {
            id: input.id,
            name: input.name,
            email: input.email,
            user_type: input.user_type
        }

        return  response;
    }


    getPath(): string {
        return this.path;
    }

    getMethod(): HttpMethod {
        return this.method;
    }
}