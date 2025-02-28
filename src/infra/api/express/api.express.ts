import { Api } from "../api";
import express,{ Express } from "express";
import { Route } from "./routes/route";

export class ApiExpress implements Api{
    private app: Express;

    private constructor(routes: Route[]){
        this.app = express();
        this.app.use(express.json());
        this.addRoutes(routes);
    }

    public static create(routes: Route[]): ApiExpress{
        return new ApiExpress(routes);
    }

    private addRoutes(routes: Route[]){
        routes.forEach((route)=>{
           const path = route.getPath();
           const method = route.getMethod();
           const handle = route.getHandle();
           this.app[method](path,handle);
        })
    }

    public async start(port: number): Promise<void>{
        this.app.listen(port, ()=>{
            console.log(`Server started on port ${port}`);
        });
    }
}