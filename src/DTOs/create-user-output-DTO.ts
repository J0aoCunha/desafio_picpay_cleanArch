export type CreateUserOutputDTO = {
    id: string;
    email: string;
    name: string;
    user_type: 'user' | 'lojista';
};