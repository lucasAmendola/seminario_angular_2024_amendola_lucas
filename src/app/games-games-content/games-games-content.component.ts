import { Component } from '@angular/core';
import { GamesDataService } from '../games-data.service';
import { GamesCarritoComponent } from '../games-carrito/games-carrito.component';
import { GameListComponent } from '../game-list/game-list.component';

@Component({
  selector: 'app-games-games-content',
  standalone: true,
  templateUrl: './games-games-content.component.html',
  styleUrl: './games-games-content.component.css',
  imports: [GamesCarritoComponent, GameListComponent],
  providers: [GamesDataService]
  
})
export class GamesGamesContentComponent {
}
