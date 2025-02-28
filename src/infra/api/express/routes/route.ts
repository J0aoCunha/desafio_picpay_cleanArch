import { Request, Response } from "express";
import { HttpMethod } from "../../../../DTOs/http-method-DTO";

export interface Route {
    getHandle(): (request: Request, response:Response) => Promise<void>;
    getPath(): string;
    getMethod(): HttpMethod;
}