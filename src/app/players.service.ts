import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  players: Player[] = [];

  constructor() { }

  getPlayers() {
    return this.players;
  }
  getPlayer(id: string) {
    return this.players.find(pl => pl.id === id);
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  deletePlayer(id: string) {
    const playerIndex = this.players.findIndex(pl => pl.id === id);

    this.players.splice(playerIndex, 1);
  }
  deleteAll() {
    this.players = [];
  }
}
