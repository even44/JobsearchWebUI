import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadComponent: () => {
			return import('./pages/home/home.component').then((m) => m.HomeComponent)
		},
	},
	{
		path: 'applications',
		loadComponent: () => {
			return import('./pages/applications/applications.component').then((m) => m.ApplicationsComponent)
		},
	},
	{
		path: 'companies',
		loadComponent: () => {
			return import('./pages/companies/companies.component').then((m) => m.CompaniesComponent)
		},
	},
	{
		path: 'contacts',
		loadComponent: () => {
			return import('./pages/contacts/contacts.component').then((m) => m.ContactsComponent)
		},
	},
	{
		path: 'update/:id',
		loadComponent: () => {
			return import('./pages/job-application-update-page/job-application-update-page.component').then((m) => m.JobApplicationUpdatePageComponent)
		},
	},
	{
		path: 'login',
		loadComponent: () => {
			return import('./pages/login/login.component').then((m) => m.LoginComponent)
		},
	}
];
