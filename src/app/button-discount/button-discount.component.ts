import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameCartService } from '../game-cart.service';
import { Game } from '../game-list/Game';


@Component({
  selector: 'app-button-discount',
  standalone: true,
  imports: [FormsModule, ],
  templateUrl: './button-discount.component.html',
  styleUrl: './button-discount.component.css'
})
export class ButtonDiscountComponent {

  constructor(private cart : GameCartService){}

  @Input()
  quantity!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
   
  }

  upQuantity():void{
    this.quantity = this.quantity+1;
    this.quantityChange.emit(this.quantity);
    if(this.quantity > 5){
        this.maxReached.emit("Maximo de copias alcanzado");
        this.quantity = this.quantity -1
    }
  }

  downQuantity():void{
    if(this.quantity > 0){
        this.quantity--;
        this.quantityChange.emit(this.quantity);
    }

  }

  addToCart(game : Game) : void{
    this.cart.addToCart(game);
  }
}
