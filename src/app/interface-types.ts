//trb sa pun interface si la cats?
export interface InterfaceAdoptions {
    id: number,
    name: string,
    description: string,
    price: number,
    image: {
        url: string
    },
    currency: string
}

export interface InterfaceProducts {
    id: number,
    name: string,
    description: string,
    price: number,
    image: {
        url: string
    },
    currency: string
}

export interface InterfaceLogin {
    id: number,
    username: string,
    password: string
}

export interface InterfaceRegister {
    id:number,
    name: string,
    username: string,
    password: string,
    email: string,
    birthday: number,
    phone: number
}

export interface InterfaceFPassword {
    habarnuam: string
}