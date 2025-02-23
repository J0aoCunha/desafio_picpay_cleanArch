import { userProps } from '../../../DTOs/UserProps';
export class User {

    private constructor(private props: userProps){}

    public static create(name: string, email: string, cpf_cnpj: string, endereco: string, password:string, money: number, user_type: string){
        return new User({
            id: crypto.randomUUID(),
            name,
            email,
            password,
            money,
            cpf_cnpj,
            endereco,
            user_type: 'user'
        });
    }

    public static with(props: userProps){
        return new User(props)
    }

    public get id(){
        return this.props.id;
    }

    public get name(){
        return this.props.name;
    }

    public get email(){
        return this.props.email;
    }

    public get money(){
        return this.props.money;
    }

    public get cpf_cnpj(){
        return this.props.cpf_cnpj;
    }

    public get endereco(){
        return this.props.endereco;
    }

    public get password(){
        return this.props.password;
    }

    public get userType(){
        return this.props.user_type;
    }

    public addMoney(value: number){

        if(value <= 0){
            throw new Error('Invalid value');
        }
            
        this.props.money += value;
    }

    public removeMoney(value: number){
        if(this.props.user_type === 'lojista'){
            throw new Error('Lojista cannot transfer money');
        }
        this.props.money -= value;
    }
}