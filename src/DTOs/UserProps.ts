export type userProps = {
    id: string,
    name: string,
    email: string,
    money: number,
    cpf_cnpj: string,
    endereco: string,
    password: string, 
    user_type?: 'user' | 'lojista'
}