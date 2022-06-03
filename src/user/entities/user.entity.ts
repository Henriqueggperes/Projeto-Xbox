import { Profile } from "src/profile/entities/profile.entity"

export class User {
  id?: string
  userName:string
  email: string
  cpf: string
  password: string
  profiles?: Profile[]
  isAdmin: boolean


  createdAt?: Date
  updatedAt?:Date
}
