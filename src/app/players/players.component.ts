import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players: Player[] = [];

  playerIndex!: number;

  noPlayers!: boolean;

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    if(this.playersService.getPlayers().length == 0) {
      this.noPlayers = true;
    } else {
      this.players = this.playersService.getPlayers();
    }
  }

  addPlayers() {
    this.players = this.playersService.getPlayers();

    const lastItem = this.players.slice(-1)[0];

    if(lastItem == undefined) {
      this.playerIndex = 1;
    } else {
      this.playerIndex = lastItem.index + 1;
    }

    const player = new Player(this.playerIndex, 0);

    this.playersService.addPlayer(player);

    if(this.players.length > 0) {
      this.noPlayers = false;
    }
  }

  deletePlayer(id: string) {
    this.playersService.deletePlayer(id);

    if(this.players.length < 1) {
      this.noPlayers = true;
    }
  }

  deleteAllPlayers() {
    this.playersService.deleteAll();

    this.players = [];

    if(this.players.length == 0) {
      this.noPlayers = true;
    }
  }

}
