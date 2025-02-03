import { Company } from "./company.type"

export type Contact = {
    ID: number
    user_id: number
    company_id: number
    company: Company
    name: string
    email: string
    phone: number
}