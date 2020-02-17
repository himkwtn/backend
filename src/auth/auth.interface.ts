import { User } from '../models/user.model'
import { CreateUser } from '../user/user.interface'

export type Token = string
export interface TokenPayload {
    userID: string
}

export type RegisterInput = CreateUser

export interface LoginInput {
    email: string
    password: string
}

export interface RegisterPayload {
    user: User
    token: string
}

export type LoginPayload = RegisterPayload
