export interface IUser {
    name : string ,
    email : string ,
    phone : string[],
    address : {
        city : string ,
        postaCode : string ,
        street : string 
    },
    password : string
}
