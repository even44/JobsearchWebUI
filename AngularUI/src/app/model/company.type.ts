import { Contact } from "./contact.type"

export type Company = {
    ID: number
    name: string
    user_id: number
    location: string
    status: string
    notes: string
    website: string
    contacts: [Contact] 
}