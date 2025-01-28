import { Company } from "./company.type";
import { Contact } from "./contact.type";

export type JobApplication = {
	ID: number;
	CreatedAt: string;
	UpdatedAt: string;
	DeletedAt: string;
	user_id: number;
	position: string;
	company_id: number;
	company: Company;
	search_date: number;
	deadline: number;
	response: boolean;
	interview: boolean;
	done: boolean;
	link: string;
	contact_id: number;
	contact: Contact;
}