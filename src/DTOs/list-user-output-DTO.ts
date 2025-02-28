export type ListUserOutputDTO = {
    users: {
        id: string;
        name: string;
        email: string;
        money: number;
        user_type: 'user' | 'lojista';
        endereco: string;
        cpf_cnpj: string;
    }[]
}