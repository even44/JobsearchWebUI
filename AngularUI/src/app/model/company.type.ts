import { Contact } from "./contact.type"

export type Company = {
    ID: number
    UpdatedAt: Date
    name: string
    location: string
    status: string
    notes: string
    website: string
    contacts: [Contact] 
}