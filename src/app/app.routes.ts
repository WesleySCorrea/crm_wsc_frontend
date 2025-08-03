import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Proposals } from './pages/proposals/proposals';
import { Propose } from './pages/propose/propose';
import { Login } from './pages/login/login';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
    { path: 'propostas', component: Proposals },
    { path: 'proposta/:numero', component: Propose },
    { path: '**', redirectTo: '' }
];
