import { Injectable } from '@angular/core';
import { Game } from './game-list/Game';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameCartService {

  private _gameList : Game[] = [];
  gameList : BehaviorSubject<Game[]> = new BehaviorSubject(this._gameList);
  
  constructor() { }

  addToCart(game: Game) {
    let item : Game | undefined = this._gameList.find((v1) => v1.name == game.name)
    if(!item){
      this._gameList.push({...game});
    }
    else{
      item.quantity += game.quantity;
    }
    this.gameList.next(this._gameList);
  }

}
