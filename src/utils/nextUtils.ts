import { IUser } from "@/types"

export const getUserFromHeaders = (headers: any): IUser => {
    return {
        email: headers.email,
        name: headers.name,
        image: headers.image
    }
}