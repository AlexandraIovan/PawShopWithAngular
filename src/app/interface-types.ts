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



 