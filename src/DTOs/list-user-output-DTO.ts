export type ListUserOutputDTO = {
    users: {
        id: string;
        name: string;
        email: string;
        money: number;
        cpf_cnpj: string;
    }[]
}