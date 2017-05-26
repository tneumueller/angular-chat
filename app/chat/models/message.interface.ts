export interface Message {
    id: number,
    author: string,
    time: Date,
    message: string,
    edited?: boolean,
    deleted?: boolean
}
