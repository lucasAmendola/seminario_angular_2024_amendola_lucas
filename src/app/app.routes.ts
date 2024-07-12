import { Routes } from '@angular/router';
import { GamesGamesContentComponent } from './games-games-content/games-games-content.component';
import { GamesContactComponent } from './games-contact/games-contact.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'games',
        pathMatch: 'full'
    },
    {
        path: 'games',
        component: GamesGamesContentComponent
    },
    {
        path: 'contact',
        component: GamesContactComponent
    }
];
