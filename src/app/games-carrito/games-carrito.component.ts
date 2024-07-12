import { Component } from '@angular/core';
import { GameCartService } from '../game-cart.service';
import { Game } from '../game-list/Game';

@Component({
  selector: 'app-games-carrito',
  standalone: true,
  imports: [],
  templateUrl: './games-carrito.component.html',
  styleUrl: './games-carrito.component.css'
})
export class GamesCarritoComponent {

  cartList : Game[] | undefined; 
  constructor(private cart : GameCartService){
    cart.gameList.subscribe((observable)=> this.cartList = observable);
  }

}
