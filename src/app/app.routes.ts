import { Routes } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { LocationComponent } from './components/location/location.component';

export const routes: Routes = [
    { path: 'character', component: CharacterComponent },
    { path: 'episode', component: EpisodeComponent},
    { path: 'location', component: LocationComponent}
];
