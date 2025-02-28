export type ListUserResponseDTO = {
   users: {
    id: string
    name: string
    email: string
    cpf_cnpj: string
    endereco: string
    money: number
    user_type: 'user' | 'lojista'
   } []
}