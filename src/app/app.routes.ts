import { Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: "", component: WelcomePageComponent},
    {path: "**", component: NotFoundComponent}
];
