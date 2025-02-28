export type CreateUserResponseDTO = {
    id: string
    name: string
    email: string
    user_type: 'user' | 'lojista'
}