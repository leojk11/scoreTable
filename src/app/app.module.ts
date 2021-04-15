import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlayersComponent } from './players/players.component';
import { NoPlayersComponent } from './no-players/no-players.component';
import { SinglePlayerComponent } from './single-player/single-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayersComponent,
    NoPlayersComponent,
    SinglePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
