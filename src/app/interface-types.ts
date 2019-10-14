export interface InterfaceCatsList {
    id: number,
    name: string,
    price: number,
    image: {
        url: string
    }
}

export interface InterfaceAdoptions {
    id: number,
    name: string,
    description: string,
    price: number,
    image: {
        url: string
    }
}

export interface InterfaceProducts {
    id: number,
    name: string,
    description: string,
    price: number,
    image: {
        url: string
    }
}