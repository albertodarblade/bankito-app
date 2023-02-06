export interface IUser {
    email: string,
    image?: string,
    name: string
}

export interface ILabel {
    _id: string,
    text: string,
    icon: string
}

export interface IRecord {
    _id: string,
    amount: number
    type: 'spent' | 'income'
    date: Date
    label: string
    description: string
    ownerId: string
}

export interface IWalletSumary {
    _id: string
    name: string
    balance?: number
    coinType?: string
}

export interface IWallet extends IWalletSumary {
    records: IRecord[],
    labels: ILabel[],
    admin: string,
    owners: IUser[]
}

