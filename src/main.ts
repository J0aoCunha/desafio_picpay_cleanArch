import { ApiExpress } from "./infra/api/express/api.express";
import { CreateUserRoute } from "./infra/api/express/routes/Users/CreateUser.express.routes";
import { ListUserRoute } from "./infra/api/express/routes/Users/ListUser.express.route";
import { UserRepositoryPrisma } from "./infra/repositories/user/prisma/user.repository.prisma";
import { prisma } from "./package/prisma/prisma";
import { CreateUserUseCase } from "./use-cases/User/create-usecase-user";
import { ListUserUseCase } from "./use-cases/User/list-usecase-user";

function main(){
    const aRepository = UserRepositoryPrisma.create(prisma);

    const createUserUseCase = CreateUserUseCase.create(aRepository);
    const listCreateUserUseCase = ListUserUseCase.create(aRepository);

    const createRoute = CreateUserRoute.create(createUserUseCase);
    const listRoute = ListUserRoute.create(listCreateUserUseCase);

    const port = 3000;
    const routes = [createRoute, listRoute];
    const api = ApiExpress.create(routes);

    api.start(port);
    
}

main()