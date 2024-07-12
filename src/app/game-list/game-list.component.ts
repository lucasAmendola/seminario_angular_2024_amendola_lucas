import { Component} from '@angular/core';
import { Game } from './Game';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ButtonDiscountComponent } from '../button-discount/button-discount.component';
import { GameCartService } from '../game-cart.service';
import { GamesDataService } from '../games-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [FormsModule, CurrencyPipe, ButtonDiscountComponent, CommonModule, HttpClientModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css',
  providers: [GamesDataService]
})
export class GameListComponent {
  games: Game[] = [
    {
      image: 'assets/img/wolfnewcolossus.jpg',
      name: 'Wolfenstein 2, New Colossus',
      description: 'Wolfenstein 2: The New Colossus is an electrifying first-person shooter that continues the alternate history of the Wolfenstein series. Set in a Nazi-controlled United States, players take on the role of the fearless BJ Blazkowicz in his battle to liberate America from the Nazi regime.',
      genre: 'Action',
      price: 22,
      stock: 130,
      offer: false,
      jugability : 'assets/img/singleplayer.png',
      jugability2 : '',
      quantity:0,
    },
    {
      image: 'assets/img/cWZlv5HCWi4sGKuwVRO4c8Xg.avif',
      name: 'Resident Evil 4, Remake',
      description: 'The Resident Evil 4 Remake is an enhanced version of the original game released in 2005. It features "over-the-shoulder" third-person shooter gameplay similar to the original, while incorporating additional design aspects from the remakes of Resident Evil 2 and Resident Evil 3. The game boasts redesigned visuals to create a tenser atmosphere, new character designs, backgrounds, and a crafting system for items and ammunition.',
      genre: 'Horror',
      price: 45,
      stock: 130,
      offer: false,
      jugability : 'assets/img/singleplayer.png',
      jugability2 : '',
      quantity:0,
    },
    {
      image: 'assets/img/codww2.jpg',
      name: 'Call Of Duty: World War II',
        description: "Call of Duty: WWII is a first-person shooter game that marks the franchise's return to its original setting of World War II. Set in the European theater, the game immerses players in intense battles on land, sea, and air as they follow the story of a group of American soldiers in the global conflict.",
      genre: 'FPS',
      price: 60,
      stock: 11,
      offer: true,
      jugability : 'assets/img/singleplayer.png',
      jugability2 : 'assets/img/multiplayer.png',
      quantity:0,
    },
    {
      image: 'assets/img/eldenringjpg.jpg',
      name: 'Elden Ring',
      genre: 'RPG',
      description: "Elden Ring is an action role-playing game set in a third-person perspective. Developed by FromSoftware and published by BANDAI NAMCO Entertainment, the game features an open world called Lands Between with six main areas to explore. Players can ride on horseback to explore the world and discover hidden dungeons, confront bosses, and enhance their skills and weaponry.",
      price: 50,
      stock: 130,
      offer: false,
      jugability : 'assets/img/singleplayer.png',
      jugability2 : '',
      quantity:0,
    },
    {
      image: 'assets/img/sekiro.jpg',
      name: 'Sekiro',
      genre: 'RPG',
      description: "Shadows Die Twice is an action-adventure game set in a reimagined late 1500s Sengoku period Japan. It follows a shinobi named Wolf as he embarks on a mission to rescue his kidnapped lord and seek revenge on his enemies. The game is known for its challenging combat, stealth mechanics, and a gripping storyline set in a beautiful and atmospheric world.",
      price: 40,
      stock: 130,
      offer: true,
      jugability : 'assets/img/singleplayer.png',
      jugability2 : '',
      quantity:0,
    },
    {
      image: 'assets/img/bioshockinfinite.jpg',
      name: 'Bioshock Infinte',
      genre: 'FPS',
      description: "BioShock Infinite is a first-person shooter game set in the airborne city of Columbia. The player assumes the role of Booker DeWitt, a former Pinkerton agent, who is sent to the city to rescue a mysterious woman named Elizabeth. The game explores themes of American exceptionalism, quantum mechanics, and features a captivating storyline with mind-bending twists.",
      price: 30,
      stock: 130,
      offer: false,
      jugability : 'assets/img/singleplayer.png',
      jugability2 : '',      
      quantity:0,
    },
    {
      image: 'assets/img/hellblade.jpg',
      name: 'Hellblade: Senua`s Sacrifice',
      genre: 'RPG',
      description: "Hellblade: Senua's Sacrifice is a dark action-adventure game that follows the journey of Senua, a Celtic warrior who embarks on a quest to save the soul of her deceased lover. The game delves into themes of mental illness, psychosis, and Norse mythology, offering a unique and immersive experience with intense combat and a gripping narrative.",
      price: 16,
      stock: 130,
      offer: false,
      jugability : 'assets/img/singleplayer.png',
      jugability2 : '',
      quantity:0,
    },  
  ]

  constructor(
    private cart : GameCartService,

  ){}

  ngOnInit(): void {
    //this.loadGames();
  }

  /*loadGames(): void {
    this.data.getAll().subscribe((data: Game[]) => {
      this.games = data;
    });
  }*/

  addToCart(game : Game) : void{
    this.cart.addToCart(game);
    game.quantity = 0;
  }
}
