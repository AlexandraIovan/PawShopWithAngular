export interface InterfaceCats{
    id: number,
    name: string,
    description: string,
    price: number,
    image: {
        url: string
    },
    currency: string
}

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
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}

export interface InterfaceRegister {
    user: {
        blocked: boolean,
        confirmed: boolean,
        email: string,
        id: string,
        provider: string,
        role: string,
        username: string,
        __v: number,
        _id: string
    },
    jwt: string
}




 